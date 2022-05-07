import type { NextPage } from "next";
import Layout from "../../components/layout";
import PageHead from "../../components/pagehead";
import { useState } from "react";

import { Box, Paper } from "@mui/material";
import MemoTextFields from "../../components/memo-text-fields";
import BackButton from "../../components/back-btn";
import AddButton from "../../components/add-btn";

const Add: NextPage = () => {
	const [message, setMessage] = useState<string>("メモ追加");
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");

	return (
		<>
			<PageHead title="追加" description="メモ追加画面" />
			<Layout>
				<Paper sx={{ padding: "16px" }}>
					<Box component={"h2"} textAlign={"center"}>
						{message}
					</Box>
					<Box maxWidth={"sm"} sx={{ margin: "0 auto" }}>
						<MemoTextFields
							title={title}
							setTitle={setTitle}
							content={content}
							setContent={setContent}
						/>
						<Box textAlign={"center"}>
							<BackButton />
							<AddButton
								setMessage={setMessage}
								title={title}
								content={content}
							/>
						</Box>
					</Box>
				</Paper>
			</Layout>
		</>
	);
};

export default Add;
