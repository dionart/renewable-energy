import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import Icon from "../../components/Icon";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import { NavigationProp } from "@react-navigation/native";
import { AuthNavigatorParamList } from "../../navigators/AuthNavigator/types";
import { Box, Button, Header, Input, Text } from "../../components";

const SignUp: React.FC = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [checked, setChecked] = useState(false);
	const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();
	const theme = useTheme() as Theme;

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
						{Array.from({ length: 3 }).map((_) => (
							<Box
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
					<Input
						label="First Name"
						onChangeText={setFirstName}
						value={firstName}
						placeholder="First Name"
					/>
					<Box marginTop={20}>
						<Input
							label="Last Name"
							onChangeText={setLastName}
							value={lastName}
							placeholder="Last Name"
						/>
					</Box>
					<Box marginTop={20}>
						<Input
							label="Email"
							onChangeText={setEmail}
							value={email}
							placeholder="Email"
						/>
					</Box>
					<Box marginTop={20}>
						<Input
							label="Password"
							onChangeText={setPassword}
							value={password}
							placeholder="Minimum 8 characters"
							icon={showPassword ? "eye" : "eye-off"}
							secureTextEntry={!showPassword}
							onIconPress={() => setShowPassword(!showPassword)}
						/>
					</Box>
				</Box>

				<Box flexDirection="row" marginTop={16}>
					<Checkbox
						value={checked}
						onValueChange={setChecked}
						color={
							checked
								? theme.colors.primary
								: theme.colors.grey300
						}
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

				<Box marginTop={37}>
					<Button
						color={theme.colors.primary}
						onPress={() => {}}
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
