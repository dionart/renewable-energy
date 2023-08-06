import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { SafeAreaView } from "react-native";
import { Theme } from "../../theme";
import { useTheme } from "styled-components";
import { PostAuthNavigatorParamList } from "./types";
import Home from "../../screens/Home";
import { Icon } from "../../components";
import TradeSvg from "../../assets/svgs/TradeSvg";
import HomeNavigator from "../HomeNavigator";
import Blank from "../../screens/Blank";

const Tab = createBottomTabNavigator<PostAuthNavigatorParamList>();

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
					name="HomeNavigator"
					component={HomeNavigator}
					options={{
						tabBarLabel: "Home",
						tabBarIcon: ({ focused }) => {
							return (
								<Icon
									icon="home"
									size={19}
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
					component={Blank}
					options={{
						headerShown: true,
						tabBarLabel: "Trade",
						tabBarIcon: ({ focused }) => {
							return (
								<TradeSvg
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
					component={Blank}
					options={{
						headerShown: true,
						tabBarLabel: "Portfolio",
						tabBarIcon: ({ focused }) => {
							return (
								<Icon
									icon="pie-chart"
									size={19}
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

export default PostAuthNavigator;
