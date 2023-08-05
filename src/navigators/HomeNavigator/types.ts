import { MockedFundsType } from "../../screens/Home";

export type HomeNavigatorParamList = {
	Home: undefined;
	FundDetails: { fund: MockedFundsType };
};
