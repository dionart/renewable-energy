import React, { useState } from "react";
import Text from "../../components/Text";
import Box from "../../components/Box";
import Input from "../../components/Input";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import Header from "../../components/Header";
import Button from "../../components/Button";

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();
	const theme = useTheme() as Theme;

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
					<Input
						label="E-mail"
						onChangeText={setEmail}
						value={email}
						placeholder="Email"
					/>
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

				<Box marginTop={37}>
					<Button onPress={handleNavigate} text="Login" />

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
