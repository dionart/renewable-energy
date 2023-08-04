import React from "react";
import AuthNavigator from "../AuthNavigator";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import PostAuthNavigator from "../PostAuthNavigator";

const AppNavigator: React.FC = () => {
	const user = useSelector((state: RootState) => state.auth.user);

	return user ? <PostAuthNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
