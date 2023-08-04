import React from "react";
import Text, { Weight } from "../Text";
import { TouchableOpacity } from "./styled";
import { Theme } from "../../theme";
import { useTheme } from "styled-components";
import Icon from "../Icon";
import Feather from "@expo/vector-icons/Feather";
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
	iconColor?: string;
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
}) => {
	const theme = useTheme() as Theme;

	return (
		<TouchableOpacity
			paddingVertical={paddingVertical}
			paddingHorizontal={paddingHorizontal}
			color={color}
			onPress={onPress}
		>
			{icon && (
				<Icon
					icon={icon}
					size={14}
					color={iconColor ?? theme.colors.black}
				/>
			)}
			<Text
				marginLeft={icon ? 4 : 0}
				size={textSize ?? 16}
				weight={textWeight}
				color={textColor ?? theme.colors.white}
				align="center"
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
