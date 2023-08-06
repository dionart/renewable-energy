import React, { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import { useAppDispatch } from "../../store";
import { login } from "../../store/authSlice";
import { AuthNavigatorParamList } from "../../navigators/AuthNavigator/types";
import { Button, Header, Input, Box, Text } from "../../components";
import { useForm, Controller } from "react-hook-form";

const Login: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false);
	const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();
	const theme = useTheme() as Theme;
	const dispatch = useAppDispatch();
	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();

	const handleLogin = (data: any) => {
		dispatch(login({ id: 1, email: data.email }));
	};

	const handleNavigate = () => {
		navigation.navigate("SignUp");
	};

	return (
		<>
			<Header />
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
					Login
				</Text>

				<Box marginTop={34}>
					<Controller
						control={control}
						render={({ field }) => (
							<Input
								label="E-mail"
								onChangeText={(value) =>
									setValue("email", value)
								}
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
							{errors.email.message as string}
						</Text>
					)}
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
								{errors.password.message as string}
							</Text>
						)}
					</Box>
				</Box>

				<Box marginTop={37}>
					<Button onPress={handleSubmit(handleLogin)} text="Login" />

					<Text
						marginTop={13}
						weight="regular"
						color={theme.colors.grey700}
						align="center"
						size={12}
					>
						Don’t have an account? {""}
						<Text
							onPress={handleNavigate}
							underline
							weight="regular"
							color={theme.colors.grey700}
							align="center"
							size={12}
						>
							Sign up
						</Text>
						{""} here
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default Login;
