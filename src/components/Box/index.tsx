import React from "react";
import { View, ViewProps, ViewStyle, StyleSheet } from "react-native";

const boxStyleProps = [
	"alignContent",
	"alignItems",
	"alignSelf",
	"aspectRatio",
	"backfaceVisibility",
	"backgroundColor",
	"borderBottomColor",
	"borderBottomLeftRadius",
	"borderBottomRightRadius",
	"borderBottomWidth",
	"borderColor",
	"borderLeftColor",
	"borderLeftWidth",
	"borderRadius",
	"borderRightColor",
	"borderRightWidth",
	"borderStyle",
	"borderTopColor",
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderTopWidth",
	"borderWidth",
	"bottom",
	"color",
	"decomposedMatrix",
	"direction",
	"display",
	"elevation",
	"flex",
	"flexBasis",
	"flexDirection",
	"flexGrow",
	"flexShrink",
	"flexWrap",
	"fontFamily",
	"fontSize",
	"fontStyle",
	"fontVariant",
	"fontWeight",
	"height",
	"includeFontPadding",
	"justifyContent",
	"left",
	"letterSpacing",
	"lineHeight",
	"margin",
	"marginBottom",
	"marginHorizontal",
	"marginLeft",
	"marginRight",
	"marginTop",
	"marginVertical",
	"maxHeight",
	"maxWidth",
	"minHeight",
	"minWidth",
	"opacity",
	"overflow",
	"overlayColor",
	"padding",
	"paddingBottom",
	"paddingHorizontal",
	"paddingLeft",
	"paddingRight",
	"paddingTop",
	"paddingVertical",
	"position",
	"resizeMode",
	"right",
	"rotation",
	"scaleX",
	"scaleY",
	"shadowColor",
	"shadowOffset",
	"shadowOpacity",
	"shadowRadius",
	"textAlign",
	"textAlignVertical",
	"textDecorationColor",
	"textDecorationLine",
	"textDecorationStyle",
	"textShadowColor",
	"textShadowOffset",
	"textShadowRadius",
	"tintColor",
	"top",
	"transform",
	"transformMatrix",
	"translateX",
	"translateY",
	"width",
	"writingDirection",
	"zIndex",
];

type BoxViewStyle = Omit<ViewStyle, "backgroundColor" | "borderColor">;

export type BoxProps = {
	backgroundColor?: string;
	borderColor?: string;
	m?: number;
	mx?: number;
	my?: number;
	mt?: number;
	mb?: number;
	ml?: number;
	mr?: number;
	p?: number;
	px?: number;
	py?: number;
	pt?: number;
	pb?: number;
	pl?: number;
	pr?: number;
	children?: React.ReactNode;
} & BoxViewStyle &
	ViewProps;

const smidge = (x?: number) => (x == null ? x : x * 8);

const Box = ({
	children,
	backgroundColor,
	borderColor,
	m,
	mx,
	my,
	mt,
	mb,
	ml,
	mr,
	p,
	px,
	py,
	pt,
	pb,
	pl,
	pr,
	style,
	...otherProps
}: BoxProps) => {
	const styleProps = Object.keys(otherProps)
		.filter((prop): prop is keyof BoxViewStyle =>
			boxStyleProps.includes(prop)
		)
		.reduce(
			(accum, prop) => ({
				...accum,
				[prop]: prop in otherProps ? otherProps[prop] : undefined,
			}),
			{} as BoxViewStyle
		);

	const viewProps = Object.keys(otherProps)
		.filter(
			(prop): prop is Exclude<keyof ViewProps, "style" | "children"> =>
				!boxStyleProps.includes(prop)
		)
		.reduce(
			(accum, prop) => ({
				...accum,
				[prop]: prop in otherProps ? otherProps[prop] : undefined,
			}),
			{} as ViewProps
		);

	return (
		<View
			style={StyleSheet.flatten([
				{
					backgroundColor: backgroundColor ?? undefined,
					borderColor: borderColor ?? undefined,
					margin: smidge(m),
					marginVertical: smidge(my),
					marginHorizontal: smidge(mx),
					marginTop: smidge(mt),
					marginBottom: smidge(mb),
					marginLeft: smidge(ml),
					marginRight: smidge(mr),
					padding: smidge(p),
					paddingVertical: smidge(py),
					paddingHorizontal: smidge(px),
					paddingTop: smidge(pt),
					paddingBottom: smidge(pb),
					paddingLeft: smidge(pl),
					paddingRight: smidge(pr),
					...styleProps,
				},
				style,
			])}
			{...viewProps}
		>
			{children}
		</View>
	);
};

export default Box;
