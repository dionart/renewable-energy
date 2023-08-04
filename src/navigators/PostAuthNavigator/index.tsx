import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { Theme } from "../../theme";
import { useTheme } from "styled-components";
import { PostAuthNavigatorParamList } from "./types";
import Home from "../../screens/Home";

const Stack = createNativeStackNavigator<PostAuthNavigatorParamList>();

const PostAuthNavigator: React.FC = () => {
	const theme = useTheme() as Theme;

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</SafeAreaView>
	);
};

export default PostAuthNavigator;
