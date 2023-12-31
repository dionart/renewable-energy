import React, { useMemo, useState } from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Box, Button, Header, Icon, Text } from "../../components";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import GrowthRow from "../../components/GrowthRow";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory-native";
import InfoBlock from "../../components/InfoBlock";
import FundBreakdownCard from "../../components/FundBreakdownCard";
import { isChartUp } from "../../utils";
import { filters, infos, mockFundBreakdown, tabs } from "./mock";
import { HomeNavigatorParamList } from "../../navigators/HomeNavigator/types";

const FundDetails: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState("1d");
	const [activeTab, setActiveTab] = useState("Highlighted");
	const navigation = useNavigation();
	const theme = useTheme() as Theme;
	const { params } =
		useRoute<RouteProp<HomeNavigatorParamList, "FundDetails">>();
	const fund = params?.fund;

	const isChartGrowing = isChartUp(fund.chartData);

	const percentageTotal = useMemo(() => {
		return (
			(parseFloat(fund.growth) / 100) *
			parseFloat(fund.value.replace(",", ""))
		).toFixed(2);
	}, [fund]);

	return (
		<ScrollView style={{ flex: 1, backgroundColor: theme.colors.white }}>
			<Header
				leftComponent={
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Icon icon="arrow-left" size={24} />
					</TouchableOpacity>
				}
				centerComponent={
					<Box>
						<Text
							style={{ textTransform: "capitalize" }}
							size={17}
							weight="semiBold"
						>
							{fund.type} Fund
						</Text>
						<Text
							color={theme.colors.grey700}
							size={14}
							weight="regular"
							align="center"
						>
							{fund.type.charAt(0).toUpperCase()}FND
						</Text>
					</Box>
				}
			/>
			<Box borderTopColor={theme.colors.grey100} borderTopWidth={1}>
				<Box
					marginTop={26}
					paddingHorizontal={20}
					flexDirection="row"
					justifyContent="space-between"
				>
					<Box>
						<Text size={24} weight="semiBold">
							{fund.value}
						</Text>
						<Box flexDirection="row">
							<GrowthRow
								isChartGrowing={isChartGrowing}
								value={fund.growth}
							/>
							<Text
								marginLeft={4}
								size={14}
								weight="regular"
								color={
									isChartGrowing
										? theme.colors.green
										: theme.colors.red
								}
							>
								($ {percentageTotal})
							</Text>
						</Box>
					</Box>
					<Text size={24} weight="semiBold">
						2022
					</Text>
				</Box>
				<Box width="100%" marginTop={20}>
					<VictoryChart padding={0}>
						<VictoryAxis
							style={{
								axis: { stroke: "transparent" },
								tickLabels: { fill: "transparent" },
							}}
						/>
						<VictoryAxis
							dependentAxis
							style={{
								axis: { stroke: "transparent" },
								tickLabels: { fill: "transparent" },
							}}
						/>
						<VictoryLine
							data={fund.chartData}
							style={{
								data: {
									stroke: isChartGrowing
										? theme.colors.green
										: theme.colors.red,
									strokeWidth: 2,
								},
							}}
						/>
					</VictoryChart>
				</Box>
			</Box>
			<Box marginTop={20} alignSelf="center" gap={25} flexDirection="row">
				{filters.map((item, index) => (
					<TouchableOpacity
						key={index}
						onPress={() => setActiveFilter(item)}
					>
						<Box
							borderRadius={4}
							paddingVertical={8}
							paddingHorizontal={9}
							backgroundColor={
								activeFilter === item
									? theme.colors.secondary
									: theme.colors.white
							}
						>
							<Text
								size={15}
								weight="medium"
								color={
									activeFilter === item
										? theme.colors.primary
										: theme.colors.grey700
								}
							>
								{item}
							</Text>
						</Box>
					</TouchableOpacity>
				))}
			</Box>

			<Box marginTop={40} paddingHorizontal={20} paddingBottom={10}>
				<Text marginBottom={20} size={17} weight="semiBold">
					Info & Stats
				</Text>
				<Box flexWrap="wrap" flex={1} flexDirection="row">
					{infos.map((item, index) => (
						<InfoBlock
							key={index}
							title={item.title}
							value={item.value}
						/>
					))}
				</Box>

				<Text
					marginTop={40}
					marginBottom={20}
					size={17}
					weight="semiBold"
				>
					Fund Breakdown
				</Text>

				<Box marginBottom={18} flexDirection="row" gap={20}>
					{tabs.map((item, index) => {
						const isActive = activeTab === item;

						return (
							<TouchableOpacity
								key={index.toString()}
								onPress={() => setActiveTab(item)}
							>
								<Box
									borderBottomColor={
										isActive
											? theme.colors.primary
											: theme.colors.white
									}
									borderBottomWidth={2}
									paddingBottom={9}
								>
									<Text
										color={
											isActive
												? theme.colors.black
												: theme.colors.grey700
										}
										weight="semiBold"
										size={14}
									>
										{item}
									</Text>
								</Box>
							</TouchableOpacity>
						);
					})}
				</Box>

				<FlatList
					horizontal
					contentContainerStyle={{ gap: 15 }}
					data={mockFundBreakdown}
					renderItem={({ item }) => (
						<FundBreakdownCard
							image={item.image}
							description={item.description}
							title={item.title}
						/>
					)}
					keyExtractor={(item) => item.id.toString()}
				/>
				<Box
					marginTop={40}
					marginBottom={20}
					alignItems="center"
					flexDirection="row"
					gap={7}
				>
					<Icon size={20} icon="pie-chart" />
					<Text size={17} weight="semiBold">
						Your Portfolio
					</Text>
				</Box>

				<Box
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Box>
						<Text size={24} weight="semiBold">
							18 credits
						</Text>
						<GrowthRow
							isChartGrowing={isChartGrowing}
							value="8.41"
						/>
					</Box>

					<Box alignItems="flex-end">
						<Text size={24} weight="semiBold">
							$328.14
						</Text>
						<Text
							size={14}
							weight="regular"
							color={theme.colors.grey700}
						>
							Last purchase 28d ago
						</Text>
					</Box>
				</Box>
				<Box
					gap={10}
					marginTop={18}
					justifyContent="space-between"
					flexDirection="row"
				>
					<Button
						onPress={() => {}}
						flex={1}
						borderColor={theme.colors.grey500}
						borderWidth={1}
						width="50%"
						color={theme.colors.white}
						textColor={theme.colors.primary}
						text="Sell"
					/>
					<Button
						onPress={() => {}}
						flex={1}
						color={theme.colors.green}
						textColor={theme.colors.white}
						text="Retire credits"
					/>
				</Box>
				<Text
					marginTop={15}
					size={11}
					weight="regular"
					color={theme.colors.grey700}
				>
					You’ve previously retired 28 credits of this asset
				</Text>
				<Box
					marginTop={40}
					marginBottom={30}
					padding={10}
					backgroundColor={theme.colors.grey100}
					borderRadius={4}
				>
					<Text
						size={12}
						weight="regular"
						color={theme.colors.grey700}
					>
						Please note that prices are for reference only and may
						vary at the time of excecuting a buy or sell order.
					</Text>
					<Text
						marginTop={10}
						size={12}
						weight="regular"
						color={theme.colors.grey700}
					>
						The information provided is not investment advice, and
						should not be used as a recommendation to buy or sell
						assets.
					</Text>
				</Box>

				<Box alignItems="center">
					<Button onPress={() => {}} width="90%" text="Buy" />
				</Box>
			</Box>
		</ScrollView>
	);
};

export default FundDetails;
