import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Checkbox from "expo-checkbox";
import Icon from "../../components/Icon";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthNavigatorParamList } from "../../navigators/AuthNavigator/types";
import { Box, Button, Header, Input, Text } from "../../components";
import { useAppDispatch } from "../../store";
import { signUp } from "../../store/authSlice";

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	checked: boolean;
}

const SignUp: React.FC = () => {
	const theme = useTheme() as Theme;
	const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();
	const [showPassword, setShowPassword] = useState(false);
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		dispatch(
			signUp({
				id: 1,
				email: data.email,
				name: data.firstName,
				lastName: data.lastName,
			})
		);
		navigation.navigate("RegistrationSuccess");
	};
	return (
		<>
			<Header
				leftComponent={
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Icon icon="arrow-left" size={24} />
					</TouchableOpacity>
				}
				centerComponent={
					<Box
						alignSelf="center"
						alignItems="center"
						gap={5}
						flexDirection="row"
					>
						{Array.from({ length: 3 }).map((_, index) => (
							<Box
								key={index}
								backgroundColor={theme.colors.grey100}
								width={50}
								height={5}
							/>
						))}
					</Box>
				}
			/>
			<Box
				borderTopWidth={1}
				borderTopColor={theme.colors.grey100}
				backgroundColor="white"
				paddingHorizontal={20}
				paddingTop={20}
				flex={1}
			>
				<Text
					align="center"
					weight="semiBold"
					size={18}
					color={theme.colors.black}
				>
					Create your account
				</Text>

				<Box marginTop={34}>
					<Controller
						control={control}
						render={({ field }) => (
							<Input
								label="First Name"
								onChangeText={field.onChange}
								value={field.value}
								placeholder="First Name"
							/>
						)}
						name="firstName"
						rules={{
							required: "First Name is required",
						}}
						defaultValue=""
					/>
					{errors.firstName && (
						<Text color="red" size={12}>
							{errors.firstName.message}
						</Text>
					)}

					<Box marginTop={20}>
						<Controller
							control={control}
							render={({ field }) => (
								<Input
									label="Last Name"
									onChangeText={field.onChange}
									value={field.value}
									placeholder="Last Name"
								/>
							)}
							name="lastName"
							rules={{
								required: "Last Name is required",
							}}
							defaultValue=""
						/>
						{errors.lastName && (
							<Text color="red" size={12}>
								{errors.lastName.message}
							</Text>
						)}
					</Box>

					<Box marginTop={20}>
						<Controller
							control={control}
							render={({ field }) => (
								<Input
									label="Email"
									onChangeText={field.onChange}
									value={field.value}
									placeholder="Email"
								/>
							)}
							name="email"
							rules={{
								required: "Email is required",
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: "Invalid email address",
								},
							}}
							defaultValue=""
						/>
						{errors.email && (
							<Text color="red" size={12}>
								{errors.email.message}
							</Text>
						)}
					</Box>

					<Box marginTop={20}>
						<Controller
							control={control}
							render={({ field }) => (
								<Input
									label="Password"
									onChangeText={field.onChange}
									value={field.value}
									placeholder="Minimum 8 characters"
									icon={showPassword ? "eye" : "eye-off"}
									secureTextEntry={!showPassword}
									onIconPress={() =>
										setShowPassword(!showPassword)
									}
								/>
							)}
							name="password"
							rules={{
								required: "Password is required",
								minLength: {
									value: 8,
									message:
										"Password must be at least 8 characters",
								},
							}}
							defaultValue=""
						/>
						{errors.password && (
							<Text color="red" size={12}>
								{errors.password.message}
							</Text>
						)}
					</Box>
				</Box>

				<Box flexDirection="row" marginTop={16}>
					<Controller
						control={control}
						render={({ field }) => (
							<Checkbox
								value={field.value}
								onValueChange={field.onChange}
								color={
									field.value
										? theme.colors.primary
										: theme.colors.grey300
								}
							/>
						)}
						name="checked"
						rules={{
							validate: (value) =>
								value === true
									? undefined
									: "You must agree to the Terms of Service and Privacy policy",
						}}
						defaultValue={false}
					/>
					<Text
						style={{ flex: 1 }}
						marginLeft={10}
						weight="regular"
						size={12}
						color={theme.colors.grey700}
					>
						I am over 18 years of age and I have read and agree to
						the{" "}
						<Text weight="regular" size={12}>
							Terms of Service{" "}
						</Text>
						and{" "}
						<Text weight="regular" size={12}>
							{""}Privacy policy.
						</Text>
					</Text>
				</Box>
				{errors.checked && (
					<Text color="red" size={12}>
						{errors.checked.message}
					</Text>
				)}

				<Box marginTop={37}>
					<Button
						color={theme.colors.primary}
						onPress={handleSubmit(onSubmit)}
						text="Create an account"
					/>

					<Text
						marginTop={13}
						weight="regular"
						color={theme.colors.grey700}
						align="center"
						size={12}
					>
						Already have an account? {""}
						<Text
							onPress={() => navigation.goBack()}
							underline
							weight="regular"
							color="black"
							align="center"
							size={12}
						>
							Log in Here
						</Text>
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default SignUp;
