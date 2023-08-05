import React from "react";
import { Box, Button, Header, Icon, Text } from "../../components";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import GrowthRow, { GrowthRowType } from "../../components/GrowthRow";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import FundCard, { FundType } from "../../components/FundCard";
import BusinessLogic from "../../assets/svgs/BusinessLogic";
import CoinSvg from "../../assets/svgs/CoinSvg";
interface MockedFundsType {
	trending: GrowthRowType;
	type: FundType;
	value: string;
	growth: string;
	chartData: { x: number; y: number }[];
}

const dataSet1 = [
	{ x: 1, y: 2 },
	{ x: 2, y: 3 },
	{ x: 3, y: 5 },
	{ x: 4, y: 4 },
	{ x: 5, y: 6 },
];

const dataSet2 = [
	{ x: 1, y: 3 },
	{ x: 2, y: 2 },
	{ x: 3, y: 4 },
	{ x: 4, y: 6 },
	{ x: 5, y: 3 },
];

const dataSet3 = [
	{ x: 1, y: 5 },
	{ x: 2, y: 2 },
	{ x: 3, y: 3 },
	{ x: 4, y: 5 },
	{ x: 5, y: 4 },
];
const mockedFunds: MockedFundsType[] = [
	{
		trending: "up",
		type: "wind",
		value: "1,457.23",
		growth: "2.3",
		chartData: dataSet1,
	},
	{
		trending: "down",
		type: "solar",
		value: "1,457.23",
		growth: "2.3",
		chartData: dataSet2,
	},
	{
		trending: "up",
		type: "nature",
		value: "1,457.23",
		growth: "2.3",
		chartData: dataSet3,
	},
];

const Home: React.FC = () => {
	const theme = useTheme() as Theme;

	const renderItem = ({ item }: { item: MockedFundsType }) => (
		<FundCard
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
							<BusinessLogic />
						</Box>
					</Box>
				</TouchableOpacity>

				<Box flexDirection="row" gap={17}>
					{Array.from({ length: 2 }).map((_) => (
						<Box
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
