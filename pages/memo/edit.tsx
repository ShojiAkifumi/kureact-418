import type { NextPage } from "next";
import Layout from "../../components/layout";
import PageHead from "../../components/pagehead";
import { db } from "../../components/fire";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

import { Box, Paper } from "@mui/material";
import MemoTextFields from "../../components/memo-text-fields";
import DeleteButton from "../../components/delete-btn";
import EditButton from "../../components/edit-btn";
import BackButton from "../../components/back-btn";

const Edit: NextPage = () => {
	const [message, setMessage] = useState<string>("メモ編集");
	const [id, setId] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const router = useRouter();

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
						<MemoTextFields
							title={title}
							content={content}
							setTitle={setTitle}
							setContent={setContent}
						/>
						<Box textAlign={"center"}>
							<BackButton />
							<DeleteButton setMessage={setMessage} id={id} />
							<EditButton
								setMessage={setMessage}
								id={id}
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

export default Edit;
