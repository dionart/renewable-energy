import React, { useState } from "react";
import { Button, TextInput, TouchableOpacity, View } from "react-native";
import Text from "../../components/Text";
import Box from "../../components/Box";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<Box
				marginTop={51}
				borderTopWidth={1}
				borderTopColor="#F4F4F4"
				backgroundColor="white"
				paddingHorizontal={20}
				paddingTop={20}
				flex={1}
			>
				<Text align="center" weight="semiBold" size={18} color="black">
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
					<TouchableOpacity
						onPress={() => navigation.navigate("SignUp")}
						style={{
							backgroundColor: "#770FDF",
							paddingVertical: 16,
							borderRadius: 4,
						}}
					>
						<Text color="white" align="center">
							Login
						</Text>
					</TouchableOpacity>

					<Text
						marginTop={13}
						weight="regular"
						color="#A0A0A0"
						align="center"
						size={12}
					>
						Don’t have an account? {""}
						<Text
							underline
							weight="regular"
							color="#A0A0A0"
							align="center"
							size={12}
						>
							Sign up
						</Text>
						{""} here
					</Text>
				</Box>
			</Box>
		</SafeAreaView>
	);
};

export default Home;
