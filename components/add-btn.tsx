import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { db } from "./fire";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
type Props = {
	setMessage: React.Dispatch<React.SetStateAction<string>>;
	title: string;
	content: string;
};
export default function AddButton(props: Props) {
	const router = useRouter();
	const doAction = async () => {
		const ob = {
			title: props.title,
			content: props.content,
			time: serverTimestamp(),
		};
		await addDoc(collection(db, "memoData"), ob);
		props.setMessage("送信中...");
		router.push("/memo");
	};
	return (
		<Button
			variant="contained"
			size="large"
			endIcon={<SendIcon />}
			onClick={doAction}
			sx={{ color: "white", margin: "16px 8px" }}
		>
			追加
		</Button>
	);
}
