import React from "react";
import Text from "../Text";
import { TouchableOpacity } from "./styled";

interface Props {
	onPress: () => void;
	text: string;
	color?: string;
}

const Button: React.FC<Props> = ({ onPress, text, color }) => {
	return (
		<TouchableOpacity color={color} onPress={onPress}>
			<Text weight="medium" color="white" align="center">
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
