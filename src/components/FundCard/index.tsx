import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import Box from "../Box";
import Icon from "../Icon";
import Text from "../Text";
import GrowthRow, { GrowthRowType } from "../GrowthRow";
import Feather from "@expo/vector-icons/Feather";
import {
	VictoryBar,
	VictoryChart,
	VictoryTheme,
	VictoryLine,
	VictoryLabel,
	VictoryAxis,
} from "victory-native";

export type FundType = "wind" | "solar" | "nature";

interface Props {
	value: string;
	growth: string;
	type: FundType;
	onPress?: () => void;
	chartData: { x: number; y: number }[];
}

interface TypeMap {
	[key: string]: {
		name: string;
		icon: keyof typeof Feather.glyphMap;
		color: string;
	};
}

const typeMap: TypeMap = {
	wind: {
		name: "Wind",
		icon: "wind",
		color: "#4A88D0",
	},
	solar: {
		name: "Solar",
		icon: "sun",
		color: "#F0A719",
	},
	nature: {
		name: "Nature",
		icon: "feather",
		color: "#0FDF8F",
	},
};

const FundCard: React.FC<Props> = ({
	value,
	growth,
	type,
	onPress,
	chartData,
}) => {
	const theme = useTheme() as Theme;
	const isChartUp =
		chartData.length > 1 &&
		chartData[chartData.length - 1].y > chartData[0].y;

	return (
		<TouchableOpacity onPress={onPress}>
			<Box
				borderRadius={4}
				padding={10}
				borderWidth={1}
				borderColor={theme.colors.grey300}
				marginRight={15}
			>
				<Icon
					color={typeMap[type].color}
					icon={typeMap[type].icon}
					size={16}
				/>
				<Text marginTop={5} size={12} weight="semiBold">
					{typeMap[type].name} Fund
				</Text>
				<Box marginTop={14} marginBottom={14}>
					<VictoryChart width={80} height={40} padding={0}>
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
							data={chartData}
							style={{
								data: {
									stroke: isChartUp
										? theme.colors.green
										: theme.colors.red,
								},
							}}
						/>
					</VictoryChart>
				</Box>
				{/* <Box height={80} /> */}
				<Box flexDirection="row">
					<Text marginRight={5} size={14} weight="regular">
						${value}
					</Text>
					<GrowthRow
						type={isChartUp ? "up" : "down"}
						value={growth}
					/>
				</Box>
			</Box>
		</TouchableOpacity>
	);
};

export default FundCard;
