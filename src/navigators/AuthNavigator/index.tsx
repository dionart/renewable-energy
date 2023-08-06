import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login, SignUp } from "../../screens";
import { Theme } from "../../theme";
import { useTheme } from "styled-components";
import { AuthNavigatorParamList } from "./types";
import RegistrationSuccess from "../../screens/RegistrationSuccess";

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

const AuthNavigator: React.FC = () => {
	const theme = useTheme() as Theme;

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen
				name="RegistrationSuccess"
				component={RegistrationSuccess}
			/>
		</Stack.Navigator>
	);
};

export default AuthNavigator;
