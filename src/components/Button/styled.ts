import styled from "styled-components/native";

interface TouchableOpacityProps {
	color?: string;
	paddingVertical?: number;
	paddingHorizontal?: number;
}

export const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps>`
	background-color: ${({ theme, color }) => color ?? theme.colors.primary};
	padding-vertical: ${({ paddingVertical }) => paddingVertical ?? 16}px;
	padding-horizontal: ${({ paddingHorizontal }) => paddingHorizontal ?? 16}px;
	border-radius: 4px;
	flex-direction: row;
`;
