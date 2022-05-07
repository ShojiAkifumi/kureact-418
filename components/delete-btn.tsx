import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "./fire";
import {
	doc,
	deleteDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
type Props = {
	setMessage: React.Dispatch<React.SetStateAction<string>>;
	id: string;
};
export default function DeleteButton(props: Props){
    const router = useRouter();
    const deleteUser = async (id: string) => {
		await deleteDoc(doc(db, "memoData", id));
		props.setMessage("削除中...");
		router.push("/memo");
	};
    return (
        <Button
            color="error"
            variant="contained"
            size="large"
            endIcon={<DeleteIcon />}
            onClick={() => deleteUser(props.id)}
            sx={{ color: "white", margin: "16px 8px" }}
        >
            削除
        </Button>
    )
}
