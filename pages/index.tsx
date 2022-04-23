import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Layout from "../components/layout";
import PageHead from "./pagehead";

const Home: NextPage = () => {
	return (
		<>
			<PageHead title="Kureact-418" description="トップページです" />
			<Layout>
				<Box>
					<Typography variant="h1">Hello typescript</Typography>
				</Box>
			</Layout>
		</>
	);
};

export default Home;
