import styled from "styled-components/native";

interface TouchableOpacityProps {
	color?: string;
	paddingVertical?: number;
	paddingHorizontal?: number;
	borderColor?: string;
	borderWidth?: number;
	width?: number | string;
	flex?: number;
}

export const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps>`
	background-color: ${({ theme, color }) => color ?? theme.colors.primary};
	padding-vertical: ${({ paddingVertical }) => paddingVertical ?? 16}px;
	padding-horizontal: ${({ paddingHorizontal }) => paddingHorizontal ?? 16}px;
	border-color: ${({ theme, borderColor }) =>
		borderColor ?? theme.colors.primary};
	border-width: ${({ borderWidth }) => borderWidth ?? 0}px;
	border-radius: 4px;
	align-items: center;
	flex: ${({ flex }) => flex ?? "none"};
	width: ${({ width }) => width};
`;
