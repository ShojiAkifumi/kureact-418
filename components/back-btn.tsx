import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function BackButton(){
    const router = useRouter();
    return (
        <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={() => router.back()}
            sx={{ color: "white", margin: "16px 8px" }}
        >
            戻る
        </Button>
    )
}
