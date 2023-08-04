import React from "react";
import { View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface Props {
	icon: keyof typeof Feather.glyphMap;
	size?: number;
	color?: string;
}

const Icon: React.FC<Props> = ({ icon, size = 20, color = "black" }) => {
	return <Feather name={icon} size={size} color={color} />;
};

export default Icon;
