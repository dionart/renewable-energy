import React, { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
	useFonts,
	Sora_400Regular,
	Sora_500Medium,
	Sora_600SemiBold,
	Sora_700Bold,
} from "@expo-google-fonts/sora";
import { ThemeProvider } from "styled-components/native";
import theme, { Theme } from "./src/theme";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
	const [fontsLoaded] = useFonts({
		Sora_400Regular,
		Sora_500Medium,
		Sora_600SemiBold,
		Sora_700Bold,
	});

	// const onLayoutRootView = useCallback(async () => {
	// 	if (fontsLoaded) {
	// 	  await SplashScreen.hideAsync();
	// 	}
	//   }, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<ThemeProvider theme={theme as Theme}>
			<NavigationContainer>
				<AuthNavigator />
			</NavigationContainer>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
