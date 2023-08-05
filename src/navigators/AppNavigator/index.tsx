import React from "react";
import AuthNavigator from "../AuthNavigator";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import PostAuthNavigator from "../PostAuthNavigator";

const AppNavigator: React.FC = () => {
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	);

	return isAuthenticated ? <PostAuthNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
