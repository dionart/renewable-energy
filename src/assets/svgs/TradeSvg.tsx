import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
	color: string;
}

const TradeSvg = ({ color }: Props) => (
	<Svg width={20} height={20} fill="none">
		<Path
			fill={color}
			d="m13.55 10 4.95 4.95-4.95 4.95-1.414-1.414 2.536-2.537L1.5 15.95v-2h13.172l-2.536-2.536L13.55 10ZM5.45 0l1.414 1.414L4.328 3.95H17.5v2H4.328l2.536 2.536L5.45 9.9.5 4.95 5.45 0Z"
		/>
	</Svg>
);
export default TradeSvg;
