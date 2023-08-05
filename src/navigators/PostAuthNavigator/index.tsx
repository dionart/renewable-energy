import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { SafeAreaView } from "react-native";
import { Theme } from "../../theme";
import { useTheme } from "styled-components";
import { PostAuthNavigatorParamList } from "./types";
import Home from "../../screens/Home";
import { Icon } from "../../components";
import FundDetails from "../../screens/FundDetails";

const Tab = createBottomTabNavigator<PostAuthNavigatorParamList>();
const Stack = createNativeStackNavigator();

const PostAuthNavigator: React.FC = () => {
	const theme = useTheme() as Theme;

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
			<Tab.Navigator
				screenOptions={() => ({
					headerShown: false,
					tabBarActiveTintColor: theme.colors.primary,
					tabBarLabelStyle: { fontFamily: "Sora_600SemiBold" },
				})}
			>
				<Tab.Screen
					name="Home"
					component={HomeNavigator}
					options={{
						tabBarLabel: "Home",
						tabBarIcon: ({ focused, size }) => {
							return (
								<Icon
									icon="home"
									size={size}
									color={
										focused
											? theme.colors.primary
											: theme.colors.black
									}
								/>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Trade"
					component={FundDetails}
					options={{
						tabBarLabel: "Trade",
						tabBarIcon: ({ focused, size }) => {
							return (
								<Icon
									icon="home"
									size={size}
									color={
										focused
											? theme.colors.primary
											: theme.colors.black
									}
								/>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Portfolio"
					component={Home}
					options={{
						tabBarLabel: "Portfolio",
						tabBarIcon: ({ focused, color, size }) => {
							return (
								<Icon
									icon="pie-chart"
									size={size}
									color={
										focused
											? theme.colors.primary
											: theme.colors.black
									}
								/>
							);
						},
					}}
				/>
			</Tab.Navigator>
		</SafeAreaView>
	);
};

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

export default PostAuthNavigator;
