import React from "react";
import Box from "../Box";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";

interface HeaderProps {
	leftComponent?: React.ReactNode;
	centerComponent?: React.ReactNode;
	rightComponent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
	leftComponent,
	centerComponent,
	rightComponent,
}) => {
	const theme = useTheme() as Theme;

	return (
		<Box
			height={50}
			paddingHorizontal={20}
			flexDirection="row"
			alignItems="center"
			justifyContent="space-between"
			backgroundColor={theme.colors.white}
		>
			<Box flex={1}>{leftComponent}</Box>
			<Box flex={2} alignItems="center">
				{centerComponent}
			</Box>
			<Box flex={1} alignItems="flex-end">
				{rightComponent}
			</Box>
		</Box>
	);
};

export default Header;
