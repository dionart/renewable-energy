import React from "react";
import { Box, Button, Header, Icon, Text } from "../../components";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import GrowthRow from "../../components/GrowthRow";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import FundCard, { FundType } from "../../components/FundCard";
import BusinessLogicSvg from "../../assets/svgs/BusinessLogicSvg";
import CoinSvg from "../../assets/svgs/CoinSvg";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { mockedFunds } from "./mock";
import { HomeNavigatorParamList } from "../../navigators/HomeNavigator/types";
export interface MockedFundsType {
	id: number;
	type: FundType;
	value: string;
	growth: string;
	chartData: { x: number; y: number }[];
}

const Home: React.FC = () => {
	const theme = useTheme() as Theme;
	const navigation = useNavigation<NavigationProp<HomeNavigatorParamList>>();

	const renderItem = ({ item }: { item: MockedFundsType }) => (
		<FundCard
			onPress={() => navigation.navigate("FundDetails", { fund: item })}
			type={item.type}
			value={item.value}
			growth={item.growth}
			chartData={item.chartData}
		/>
	);

	return (
		<ScrollView style={{ flex: 1, backgroundColor: theme.colors.white }}>
			<Header
				leftComponent={
					<TouchableOpacity>
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
					</TouchableOpacity>
				}
				centerComponent={
					<Box flexDirection="row">
						<Text size={14} weight="semiBold">
							Account: $1,457.23
						</Text>
						<TouchableOpacity>
							<Icon icon="chevron-down" />
						</TouchableOpacity>
					</Box>
				}
				rightComponent={
					<TouchableOpacity>
						<Icon size={24} icon="bell" />
					</TouchableOpacity>
				}
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
						<GrowthRow isChartGrowing={true} value="31.82" />
					</Box>
					<Button
						onPress={() => {}}
						paddingVertical={8}
						paddingHorizontal={9}
						textSize={11}
						textWeight="semiBold"
						textColor={theme.colors.primary}
						color={theme.colors.secondary}
						text="Earn Rewards"
						leftComponent={
							<Box marginTop={2}>
								<CoinSvg />
							</Box>
						}
					/>
				</Box>
			</Box>
			<Box
				marginTop={30}
				height={1}
				backgroundColor={theme.colors.grey100}
			/>
			<Box marginTop={20} paddingHorizontal={20}>
				<Text marginBottom={20} size={18} weight="semiBold">
					Funds
				</Text>

				<FlatList
					horizontal
					data={mockedFunds}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
				/>

				<TouchableOpacity>
					<Box
						marginTop={20}
						flexDirection="row"
						borderRadius={10}
						backgroundColor={theme.colors.primary}
						justifyContent="space-between"
						paddingRight={10}
						paddingLeft={20}
						paddingVertical={9}
					>
						<Box alignItems="center" justifyContent="center">
							<Text color={theme.colors.white} weight="semiBold">
								{`Learn more about\ncarbon credits`}
							</Text>
							<Text
								marginTop={10}
								size={12}
								color={theme.colors.white}
								weight="regular"
							>
								Check out our top tips!
							</Text>
						</Box>
						<Box width={90} height={84}>
							<BusinessLogicSvg />
						</Box>
					</Box>
				</TouchableOpacity>

				<Box flexDirection="row" gap={17}>
					{Array.from({ length: 2 }).map((_, index) => (
						<Box
							key={index}
							flex={1}
							height={200}
							marginTop={20}
							paddingHorizontal={12}
							paddingVertical={21}
							backgroundColor={theme.colors.grey100}
							borderRadius={10}
						>
							<Text size={12} weight="semiBold">
								{`Why should you\n invest here?`}
							</Text>
							<Text size={12} weight="regular" marginTop={16}>
								lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</Text>
						</Box>
					))}
				</Box>
			</Box>
		</ScrollView>
	);
};

export default Home;
