import React from "react";
import { TextInput, TextInputProps, TouchableOpacity } from "react-native";
import Text from "../../components/Text";
import Feather from "@expo/vector-icons/Feather";

import Box from "../Box";

interface Props extends TextInputProps {
	placeholder: string;
	value: string;
	onChangeText: (text: string) => void;
	label: string;
	icon?: keyof typeof Feather.glyphMap;
	onIconPress?: () => void;
}

const Input: React.FC<Props> = ({
	placeholder,
	value,
	onChangeText,
	label,
	icon,
	onIconPress,
	...props
}) => {
	return (
		<>
			<Text weight="medium" marginBottom={5} size={11} color="#A0A0A0">
				{label}
			</Text>
			<Box
				backgroundColor="#F4F4F4"
				flexDirection="row"
				alignItems="center"
				paddingHorizontal={10}
				paddingVertical={15}
				borderRadius={4}
			>
				<TextInput
					style={{
						flex: 1,
					}}
					onChangeText={onChangeText}
					value={value}
					placeholder={placeholder}
					{...props}
				/>
				<TouchableOpacity onPress={onIconPress}>
					{icon && <Feather name={icon} size={20} color="#A0A0A0" />}
				</TouchableOpacity>
			</Box>
		</>
	);
};

export default Input;
