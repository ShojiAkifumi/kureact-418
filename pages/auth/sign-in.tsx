import type { NextPage } from "next";
import Layout from "../../components/layout";
import PageHead from "../../components/pagehead";
import { useState, useEffect } from "react";

import { Box, Paper, TableContainer } from "@mui/material";
const SignIn: NextPage = () => {
	const [message, setMessage] = useState("ログイン")
	return (
		<>
			<PageHead
				title="サインイン | Kureact-418"
				description="サインインページです。"
			/>
			<Layout>
				<Paper sx={{ padding: "16px" }}>
					<Box component={"h2"} textAlign={"center"}>
						{message}
					</Box>
				</Paper>
			</Layout>
		</>
	);
};

export default SignIn;
