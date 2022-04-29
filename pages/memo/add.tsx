import type { NextPage } from "next";
import Layout from "../../components/layout";
import PageHead from "../../components/pagehead";
import { db } from "../../components/fire";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";

import { Box, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Add: NextPage = () => {
	const [message, setMessage] = useState<string>("メモ追加");
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const router = useRouter();
	const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTitle(e.target.value);
	};
	const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setContent(e.target.value);
	};
	const doAction = async () => {
		const ob = {
			title: title,
			content: content,
			time: serverTimestamp(),
		};
		await addDoc(collection(db, "memoData"), ob);
		setMessage("送信中...");
		router.push("/memo");
	};
	return (
		<>
			<PageHead title="追加" description="メモ追加画面" />
			<Layout>
				<Paper sx={{ padding: "16px" }}>
					<Box component={"h2"} textAlign={"center"}>
						{message}
					</Box>
					<Box maxWidth={"sm"} sx={{ margin: "0 auto" }}>
						<TextField
							id="outlined-basic"
							label="タイトル"
							variant="outlined"
							fullWidth
							margin="normal"
							color="warning"
							onChange={onChangeTitle}
						/>
						<TextField
							id="outlined-basic"
							label="内容"
							variant="outlined"
							rows={6}
							margin="normal"
							color="warning"
							multiline
							fullWidth
							onChange={onChangeContent}
						/>
						<Box textAlign={"center"}>
							<Button
								color="secondary"
								variant="contained"
								size="large"
								onClick={() => router.back()}
								sx={{ color: "white", margin: "16px 8px" }}
							>
								戻る
							</Button>
							<Button
								variant="contained"
								size="large"
								endIcon={<SendIcon />}
								onClick={doAction}
								sx={{ color: "white", margin: "16px 8px" }}
							>
								追加
							</Button>
						</Box>
					</Box>
				</Paper>
			</Layout>
		</>
	);
};

export default Add;
