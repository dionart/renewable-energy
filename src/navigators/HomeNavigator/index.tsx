import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import FundDetails from "../../screens/FundDetails";

const Stack = createNativeStackNavigator();

const HomeNavigator: React.FC = () => {
	const theme = useTheme() as Theme;

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="FundDetails" component={FundDetails} />
			</Stack.Navigator>
		</SafeAreaView>
	);
};

export default HomeNavigator;
