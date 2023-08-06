import React from "react";
import { Box, Text, Button, Icon } from "../../components";
import { useTheme } from "styled-components";
import { Theme } from "../../theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthNavigatorParamList } from "../../navigators/AuthNavigator/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const RegistrationSuccess: React.FC = () => {
	const theme = useTheme() as Theme;
	const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();
	const user = useSelector((state: RootState) => state.auth.user);

	const handleContinue = () => {
		navigation.navigate("Login");
	};

	return (
		<Box
			justifyContent="center"
			backgroundColor={theme.colors.white}
			flex={1}
		>
			<Box paddingHorizontal={24} alignItems="center">
				<Icon
					color={theme.colors.green}
					size={56}
					icon="check-circle"
				/>
				<Text
					marginTop={24}
					marginBottom={24}
					align="center"
					size={36}
					weight="semiBold"
					color={theme.colors.green}
				>
					Registration Successful!
				</Text>
				<Text
					align="center"
					marginBottom={24}
					weight="regular"
					size={16}
				>
					{`Thank you for registering, ${user?.name} ${user?.lastName}. You can now log in to your account.`}
				</Text>
				<Button
					color={theme.colors.black}
					onPress={handleContinue}
					text="Continue to login"
				/>
			</Box>
		</Box>
	);
};

export default RegistrationSuccess;
