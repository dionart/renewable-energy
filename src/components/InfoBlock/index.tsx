import React from "react";
import { View } from "react-native";
import Box from "../Box";
import Text from "../Text";
import Icon from "../Icon";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";

interface Props {
	title: string;
	value: string;
}

const InfoBlock: React.FC<Props> = ({ title, value }) => {
	const theme = useTheme() as Theme;
	return (
		<Box width="50%" marginBottom={10}>
			<Box flexDirection="row" alignItems="center">
				<Text
					size={14}
					weight="regular"
					color={theme.colors.grey700}
					marginRight={4}
				>
					{title}
				</Text>
				<Icon icon="info" size={14} color={theme.colors.grey700} />
			</Box>
			<Text marginTop={10} size={14} weight="regular">
				{value}
			</Text>
		</Box>
	);
};

export default InfoBlock;
