import React from "react";
import { Box, Button, Header, Icon, Text } from "../../components";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import GrowthRow from "../../components/GrowthRow";

const Home: React.FC = () => {
	const theme = useTheme() as Theme;

	return (
		<Box flex={1} backgroundColor={theme.colors.white}>
			<Header
				leftComponent={
					<Box
						alignItems="center"
						justifyContent="center"
						borderRadius={16}
						backgroundColor={theme.colors.grey100}
						width={32}
						height={32}
					>
						<Icon size={24} icon="user" />
					</Box>
				}
				centerComponent={
					<Box flexDirection="row">
						<Text size={14} weight="semiBold">
							Account: $1,457.23
						</Text>
						<Icon icon="chevron-down" />
					</Box>
				}
				rightComponent={<Icon size={24} icon="bell" />}
			/>
			<Box marginTop={16} paddingHorizontal={20}>
				<Text size={12} weight="regular">
					Portfolio
				</Text>
				<Box flexDirection="row" justifyContent="space-between">
					<Box flexDirection="row">
						<Text size={24} weight="semiBold">
							$1,245.23
						</Text>
						<GrowthRow type="up" value="31.82" />
					</Box>
					<Button
						onPress={() => {}}
						icon="circle"
						iconColor={theme.colors.primary}
						paddingVertical={8}
						paddingHorizontal={9}
						textSize={11}
						textWeight="semiBold"
						textColor={theme.colors.primary}
						color={theme.colors.secondary}
						text="Earn Rewards"
					/>
				</Box>
			</Box>
			<Box
				marginTop={30}
				height={1}
				backgroundColor={theme.colors.grey100}
			/>
		</Box>
	);
};

export default Home;
