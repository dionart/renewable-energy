import React from "react";
import { Box, Text } from "../../components";

const Blank: React.FC = () => {
	return (
		<Box padding={24} flex={1} backgroundColor="white">
			<Text size={20} weight="bold">
				Lorem Ipsum
			</Text>
			<Text marginTop={16} size={16}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				dapibus, purus at sagittis mattis, nibh eros rhoncus libero, non
				eleifend odio nibh quis arcu. Sed ac massa vitae odio tincidunt
				bibendum. Fusce vitae consequat nisi. Integer bibendum vehicula
				odio, ac semper nunc tincidunt vel. Etiam pharetra nisl a arcu
				bibendum, et scelerisque lacus venenatis. Vivamus sit amet quam
				et metus scelerisque elementum. Donec quis ullamcorper ligula.
				Nullam ut arcu vel tortor tincidunt interdum nec a urna. Etiam
				vel lectus metus. Nam eget felis quis nisi elementum
				scelerisque. Nulla facilisi. Ut vel metus in ex finibus auctor.
				Sed rutrum aliquam dui eget tincidunt. Integer bibendum dui id
				nisl euismod, vel cursus velit varius. Nunc in massa mauris.
			</Text>
		</Box>
	);
};

export default Blank;
