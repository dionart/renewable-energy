import { MockedFundsType } from ".";

const dataSet1 = [
	{ x: 1, y: 2 },
	{ x: 2, y: 3 },
	{ x: 3, y: 5 },
	{ x: 4, y: 4 },
	{ x: 5, y: 6 },
	{ x: 6, y: 3 },
	{ x: 7, y: 2 },
	{ x: 8, y: 1 },
	{ x: 9, y: 5 },
	{ x: 10, y: 4 },
];

const dataSet2 = [
	{ x: 1, y: 3 },
	{ x: 2, y: 2 },
	{ x: 3, y: 4 },
	{ x: 4, y: 6 },
	{ x: 5, y: 3 },
	{ x: 6, y: 5 },
	{ x: 7, y: 2 },
	{ x: 8, y: 4 },
	{ x: 9, y: 3 },
	{ x: 10, y: 2 },
];

const dataSet3 = [
	{ x: 1, y: 5 },
	{ x: 2, y: 2 },
	{ x: 3, y: 3 },
	{ x: 4, y: 5 },
	{ x: 5, y: 4 },
	{ x: 6, y: 6 },
	{ x: 7, y: 1 },
	{ x: 8, y: 4 },
	{ x: 9, y: 3 },
	{ x: 10, y: 5 },
];

export const mockedFunds: MockedFundsType[] = [
	{
		id: 1,
		type: "wind",
		value: "1,457.23",
		growth: "2.3",
		chartData: dataSet1,
	},
	{
		id: 2,
		type: "solar",
		value: "1,457.23",
		growth: "2.3",
		chartData: dataSet2,
	},
	{
		id: 3,
		type: "nature",
		value: "1,457.23",
		growth: "2.3",
		chartData: dataSet3,
	},
];
