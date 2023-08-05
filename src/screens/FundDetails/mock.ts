let pictureList = [];

for (let i = 0; i < 3; i++) {
	const imageUrl = `https://picsum.photos/id/${i}/500/300`;
	pictureList.push(imageUrl);
}

export const infos = [
	{
		title: "AUM",
		value: "$430.88m",
	},
	{
		title: "Issue Date",
		value: "18/04/2022",
	},
	{
		title: "Vintage Range",
		value: "2019-2022",
	},
	{
		title: "TER",
		value: "0.15%",
	},
	{
		title: "Price at Close",
		value: "$17.68",
	},
	{
		title: "Price at Open",
		value: "$17.74",
	},
];

export const mockFundBreakdown = [
	{
		image: pictureList[0],
		title: "AspiraDAC",
		description:
			"Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
	},
	{
		image: pictureList[1],
		title: "climeworks",
		description:
			"uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.",
	},
];

export const tabs = ["Highlighted", "Value", "Vintage", "Registry"];

export const filters = ["1h", "1d", "1w", "1m", "1y", "All"];
