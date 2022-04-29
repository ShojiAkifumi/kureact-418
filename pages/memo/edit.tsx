import type { NextPage } from "next";
import Layout from "../../components/layout";
import PageHead from "../../components/pagehead";
import { db } from "../../components/fire";
import { useState, useEffect } from "react";
import {
	doc,
	getDoc,
	updateDoc,
	deleteDoc,
	serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/router";

import { Box, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Edit: NextPage = () => {
	const [message, setMessage] = useState<string>("メモ編集");
	const [id, setId] = useState<string>("");
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
		await updateDoc(doc(db, "memoData", id), ob);
		setMessage("送信中...");
		router.push("/memo");
	};

	const deleteUser = async (id: string) => {
		await deleteDoc(doc(db, "memoData", id));
		setMessage("削除中...");
		router.push("/memo");
	};

	useEffect(() => {
		const queryId = router.query.id;
		if (queryId === undefined || typeof queryId === "object") {
			router.push("/memo");
		} else {
			getDoc(doc(db, "memoData", queryId)).then((snapshot) => {
				const data = snapshot.data();
				if (data != undefined) {
					setId(snapshot.id);
					setTitle(data.title);
					setContent(data.content);
				}
			});
		}
	}, []);

	return (
		<>
			<PageHead title="編集" description="メモ編集" />
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
							value={title}
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
							value={content}
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
								color="error"
								variant="contained"
								size="large"
								endIcon={<DeleteIcon />}
								onClick={() => deleteUser(id)}
								sx={{ color: "white", margin: "16px 8px" }}
							>
								削除
							</Button>
							<Button
								color="info"
								variant="contained"
								size="large"
								endIcon={<EditIcon />}
								onClick={doAction}
								sx={{ color: "white", margin: "16px 8px" }}
							>
								更新
							</Button>
						</Box>
					</Box>
				</Paper>
			</Layout>
		</>
	);
};

export default Edit;
