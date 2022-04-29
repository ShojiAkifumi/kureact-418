import type { NextPage } from "next";
import Layout from "../../components/layout";
import PageHead from "../../components/pagehead";
import { db } from "../../components/fire";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { Box, Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Link from "next/link";

const Memo: NextPage = () => {
	const memoData: JSX.Element[] = [];
	const [memo, setMemo] = useState(memoData);
	const [message, setMessage] = useState("読み込み中...");
	useEffect(() => {
		getDocs(collection(db, "memoData")).then((snapshot) => {
			snapshot.forEach((document) => {
				const doc = document.data();
				memoData.push(
					<TableRow key={document.id}>
						<TableCell>{doc.title}</TableCell>
						<TableCell>{doc.content}</TableCell>
						<TableCell>
							<Link href={"/memo/edit?id=" + document.id}>
								<Button>編集</Button>
							</Link>
						</TableCell>
					</TableRow>
				);
			});
			setMemo(memoData);
			setMessage("メモデータ一覧");
		});
	}, []);
	return (
		<>
			<PageHead
				title="投稿追加 | Kureact-418"
				description="投稿追加ページです。"
			/>
			<Layout>
				<Paper sx={{ padding: "16px" }}>
					<Box component={"h2"} textAlign={"center"}>
						{message}
					</Box>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>title</TableCell>
								<TableCell colSpan={2}>Content</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{memo}</TableBody>
					</Table>
				</Paper>
			</Layout>
		</>
	);
};

export default Memo;