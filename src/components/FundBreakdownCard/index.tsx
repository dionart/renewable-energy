import React from "react";
import { Image } from "react-native";
import Box from "../Box";
import Text from "../Text";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";

interface Props {
	image: string;
	title: string;
	description: string;
}

const FundBreakdownCard: React.FC<Props> = ({ image, title, description }) => {
	const theme = useTheme() as Theme;

	return (
		<Box
			width={220}
			borderRadius={4}
			borderColor={theme.colors.grey300}
			borderWidth={1}
		>
			<Image
				resizeMode="cover"
				style={{
					width: "100%",
					height: 106,
					borderTopLeftRadius: 4,
					borderTopRightRadius: 4,
				}}
				source={{ uri: image }}
			/>
			<Box paddingHorizontal={13} paddingTop={15} paddingBottom={23}>
				<Text>{title}</Text>
				<Text size={12} weight="regular" marginTop={10}>
					{description}
				</Text>
				<Text underline size={12} weight="regular" marginTop={10}>
					Read More
				</Text>
			</Box>
		</Box>
	);
};

export default FundBreakdownCard;
