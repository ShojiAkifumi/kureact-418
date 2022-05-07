import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { db } from "./fire";
import {
	doc,
	updateDoc,
	serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/router";
type Props = {
	setMessage: React.Dispatch<React.SetStateAction<string>>;
    id:string;
	title: string;
    content:string;
};
export default function EditButton(props: Props){
    const router = useRouter();
    const doAction = async () => {
		const ob = {
			title: props.title,
			content: props.content,
			time: serverTimestamp(),
		};
        await updateDoc(doc(db, "memoData", props.id), ob);
		props.setMessage("送信中...");
		router.push("/memo");
	};
    return (
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
    )
}
