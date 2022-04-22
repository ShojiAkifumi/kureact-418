import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
	return (
		<Layout title="トップページ">
			<Box>
				<Typography variant="h1">Hello typescript</Typography>
			</Box>
		</Layout>
	);
};

export default Home;
