import React, { useState } from "react";
import { Button, TextInput, TouchableOpacity, View } from "react-native";
import Text from "../../components/Text";
import Box from "../../components/Box";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import Icon from "../../components/Icon";

const SignUp: React.FC = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [checked, setChecked] = useState(false);
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<Box
				justifyContent="space-between"
				flexDirection="row"
				paddingVertical={14}
				paddingHorizontal={23}
			>
				<Icon icon="arrow-left" size={24} />
				<Box
					alignSelf="center"
					alignItems="center"
					gap={5}
					flexDirection="row"
				>
					<Box backgroundColor="#F4F4F4" width={50} height={5} />
					<Box backgroundColor="#F4F4F4" width={50} height={5} />
					<Box backgroundColor="#F4F4F4" width={50} height={5} />
				</Box>
				<Box />
			</Box>
			<Box
				borderTopWidth={1}
				borderTopColor="#F4F4F4"
				backgroundColor="white"
				paddingHorizontal={20}
				paddingTop={20}
				flex={1}
			>
				<Text align="center" weight="semiBold" size={18} color="black">
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
						color={checked ? "#770FDF" : "#E6E6E6"}
					/>
					<Text
						style={{ flex: 1 }}
						marginLeft={10}
						weight="regular"
						size={12}
						color="#A0A0A0"
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
					<TouchableOpacity
						onPress={() => navigation.navigate("SignUp")}
						style={{
							backgroundColor: "#770FDF",
							paddingVertical: 16,
							borderRadius: 4,
						}}
					>
						<Text weight="medium" color="white" align="center">
							Create account
						</Text>
					</TouchableOpacity>

					<Text
						marginTop={13}
						weight="regular"
						color="#A0A0A0"
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
		</SafeAreaView>
	);
};

export default SignUp;
