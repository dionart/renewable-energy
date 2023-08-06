import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import FundDetails from "../../screens/FundDetails";

const Stack = createNativeStackNavigator();

const HomeNavigator: React.FC = () => {
	const theme = useTheme() as Theme;

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="FundDetails" component={FundDetails} />
		</Stack.Navigator>
	);
};

export default HomeNavigator;
