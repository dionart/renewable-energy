export const isChartUp = (chartData: { x: number; y: number }[]) => {
	return (
		chartData.length > 1 &&
		chartData[chartData.length - 1].y > chartData[0].y
	);
};
