import { DefaultTheme } from "styled-components/native";

export interface Theme extends DefaultTheme {
	colors: {
		primary: string;
		secondary: string;
		green: string;
		red: string;
		black: string;
		white: string;
		grey100: string;
		grey300: string;
		grey700: string;
	};
}

const theme: Theme = {
	colors: {
		primary: "#770FDF",
		secondary: "#F7EFFF",
		green: "#0FDF8F",
		red: "#EE8688",
		black: "#000000",
		white: "#FFFFFF",
		grey100: "#F4F4F4",
		grey300: "#E6E6E6",
		grey700: "#A0A0A0",
	},
};

export default theme;
