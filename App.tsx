import React, { StyleSheet } from "react-native";
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
import { Provider } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import store from "./src/store";
import AppNavigator from "./src/navigators/AppNavigator";

export default function App() {
	const [fontsLoaded] = useFonts({
		Sora_400Regular,
		Sora_500Medium,
		Sora_600SemiBold,
		Sora_700Bold,
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<ThemeProvider theme={theme as Theme}>
					<NavigationContainer>
						<SafeAreaView
							edges={["top"]}
							style={{
								flex: 1,
								backgroundColor: theme.colors.white,
							}}
						>
							<AppNavigator />
						</SafeAreaView>
					</NavigationContainer>
				</ThemeProvider>
			</Provider>
		</SafeAreaProvider>
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
