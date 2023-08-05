import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Box, Header, Icon, Text } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import GrowthRow from "../../components/GrowthRow";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory-native";

const mockedFund = {
	trending: "up",
	type: "nature",
	value: "1,457.23",
	growth: "2.3",
	chartData: [
		{ x: 1, y: 5 },
		{ x: 2, y: 2 },
		{ x: 3, y: 3 },
		{ x: 4, y: 5 },
		{ x: 5, y: 4 },
	],
};

const filters = ["1h", "1d", "1w", "1m", "1y", "All"];

const FundDetails: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState("1d");
	const navigation = useNavigation();
	const theme = useTheme() as Theme;

	const isChartUp =
		mockedFund.chartData.length > 1 &&
		mockedFund.chartData[mockedFund.chartData.length - 1].y >
			mockedFund.chartData[0].y;

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
						<Text size={17} weight="semiBold">
							Wind Fund
						</Text>
						<Text
							color={theme.colors.grey700}
							size={14}
							weight="regular"
							align="center"
						>
							WFND
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
							$18.23
						</Text>
						<GrowthRow type="up" value="3.51" />
					</Box>
					<Text size={24} weight="semiBold">
						2022
					</Text>
				</Box>
				<Box marginTop={20}>
					<VictoryChart height={170} padding={4}>
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
							data={mockedFund.chartData}
							style={{
								data: {
									stroke: isChartUp
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
				{filters.map((item) => (
					<TouchableOpacity onPress={() => setActiveFilter(item)}>
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
		</ScrollView>
	);
};

export default FundDetails;
