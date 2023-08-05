import React from "react";
import Text, { Weight } from "../Text";
import { TouchableOpacity } from "./styled";
import { Theme } from "../../theme";
import { useTheme } from "styled-components";
import Icon from "../Icon";
import Feather from "@expo/vector-icons/Feather";
import Box from "../Box";
interface Props {
	onPress: () => void;
	text: string;
	textColor?: string;
	color?: string;
	textSize?: number;
	textWeight?: Weight;
	paddingVertical?: number;
	paddingHorizontal?: number;
	icon?: keyof typeof Feather.glyphMap;
	leftComponent?: React.ReactNode;
	iconColor?: string;
	borderColor?: string;
	borderWidth?: number;
	width?: number | string;
	flex?: number;
}

const Button: React.FC<Props> = ({
	onPress,
	text,
	color,
	textColor,
	textSize,
	paddingVertical,
	paddingHorizontal,
	icon,
	iconColor,
	textWeight = "medium",
	leftComponent,
	borderColor,
	borderWidth,
	width,
	flex,
}) => {
	const theme = useTheme() as Theme;

	return (
		<TouchableOpacity
			flex={flex}
			borderColor={borderColor}
			borderWidth={borderWidth}
			width={width}
			paddingVertical={paddingVertical}
			paddingHorizontal={paddingHorizontal}
			color={color}
			onPress={onPress}
		>
			<Box flexDirection="row">
				{leftComponent && leftComponent}
				{icon && (
					<Icon
						icon={icon}
						size={14}
						color={iconColor ?? theme.colors.black}
					/>
				)}
				<Text
					marginLeft={icon || leftComponent ? 4 : 0}
					size={textSize ?? 16}
					weight={textWeight}
					color={textColor ?? theme.colors.white}
					align="center"
				>
					{text}
				</Text>
			</Box>
		</TouchableOpacity>
	);
};

export default Button;
