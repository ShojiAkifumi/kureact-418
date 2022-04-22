import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/layout";

const Preview: NextPage = () => {
	return (
		<Layout title="プレビュー">
			<Paper>
				<Box component={"h2"} sx={{ padding: "16px" }}>
					あいうえお
				</Box>
			</Paper>
		</Layout>
	);
};

export default Preview;
