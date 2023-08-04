import styled from "styled-components/native";

interface TouchableOpacityProps {
	color?: string;
}

export const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps>`
	background-color: ${({ theme, color }) => color ?? theme.colors.primary};
	padding-vertical: 16px;
	border-radius: 4px;
`;
