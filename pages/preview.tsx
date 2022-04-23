import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/layout";
import PageHead from "./pagehead";
const Preview: NextPage = () => {
	return (
		<>
			<PageHead
				title="投稿一覧 | Kureact-418"
				description="投稿一覧ページです。"
			/>
			<Layout>
				<Paper>
					<Box component={"h2"} sx={{ padding: "16px" }}>
						あいうえお
					</Box>
				</Paper>
			</Layout>
		</>
	);
};

export default Preview;
