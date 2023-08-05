import { MockedFundsType } from "../../screens/Home";

export type PostAuthNavigatorParamList = {
	Home: undefined;
	Trade: undefined;
	Portfolio: undefined;
};

export type HomeNavigatorParamList = {
	Home: undefined;
	FundDetails: { fund: MockedFundsType };
};
