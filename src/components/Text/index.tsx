import React, { useMemo } from "react";
import {
	Text as NativeText,
	TextProps as NativeTextProps,
	TextStyle,
	Animated,
	StyleProp,
} from "react-native";
import styled from "styled-components/native";

type Alignment = "center" | "left" | "right" | "inherit";
type Modifier = "underline";
export type Weight = "regular" | "medium" | "semiBold" | "bold" | "inherit";

export const weightStyles: Record<Weight, TextStyle> = {
	inherit: {},
	regular: {
		fontFamily: "Sora_400Regular",
	},
	medium: {
		fontFamily: "Sora_500Medium",
	},
	semiBold: {
		fontFamily: "Sora_600SemiBold",
	},
	bold: {
		fontFamily: "Sora_700Bold",
	},
};

const alignmentStyles: Record<Alignment, TextStyle> = {
	inherit: {},
	left: {
		textAlign: "left",
	},
	center: {
		textAlign: "center",
	},
	right: {
		textAlign: "right",
	},
};

const modifierStyles: Record<Modifier, TextStyle> = {
	underline: {
		textDecorationLine: "underline",
	},
};

export type TextProps = {
	size?: number;
	weight?: Weight;
	align?: Alignment;
	color?: string;
	animated?: boolean;
	hexColor?: string;
	margin?: number;
	marginTop?: number;
	marginBottom?: number;
	marginLeft?: number;
	marginRight?: number;
	padding?: number;
	paddingTop?: number;
	paddingBottom?: number;
	paddingLeft?: number;
	paddingRight?: number;
	style?: StyleProp<TextStyle>;
	children?: React.ReactNode;
} & Partial<Record<Modifier, boolean>> &
	NativeTextProps;

const StyledText = styled(NativeText)``;

const Text = ({
	style,
	size = 16,
	weight = "inherit",
	align = "inherit",
	color = "black",
	underline = false,
	animated = false,
	hexColor,
	margin,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	padding,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	...otherProps
}: TextProps): JSX.Element => {
	const Component = useMemo(
		() => (animated ? Animated.Text : StyledText), // Use the StyledText instead of NativeText
		[animated]
	);

	const textStyle: StyleProp<TextStyle> = {
		fontSize: size,
		...weightStyles[weight],
		...alignmentStyles[align],
		...(color ? { color } : {}),
		...(hexColor ? { color: hexColor } : {}),
		...(underline && modifierStyles.underline),
		marginTop,
		marginBottom,
		marginLeft,
		marginRight,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		...(margin !== undefined ? { margin } : {}),
		...(padding !== undefined ? { padding } : {}),
	};

	return <Component style={[textStyle, style]} {...otherProps} />;
};

export default Text;
