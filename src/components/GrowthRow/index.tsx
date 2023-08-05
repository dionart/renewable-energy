import React from "react";
import Icon from "../Icon";
import Box from "../Box";
import Text from "../Text";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";

export type GrowthRowType = "up" | "down";
interface Props {
	isChartGrowing: boolean;
	value: string;
}

const GrowthRow: React.FC<Props> = ({ isChartGrowing, value }) => {
	const theme = useTheme() as Theme;

	return (
		<Box alignItems="flex-end" flexDirection="row">
			<Icon
				icon={isChartGrowing ? "arrow-up-right" : "arrow-down-right"}
				size={18}
				color={isChartGrowing ? theme.colors.green : theme.colors.red}
			/>
			<Text
				color={isChartGrowing ? theme.colors.green : theme.colors.red}
				weight="regular"
				size={14}
			>
				{value}%
			</Text>
		</Box>
	);
};

export default GrowthRow;
