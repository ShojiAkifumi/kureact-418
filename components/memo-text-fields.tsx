import TextField from "@mui/material/TextField";

type Props = {
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
};
export default function MemoTextFields(props: Props){

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
		props.setTitle(e.target.value);
	};

	const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>): void => {
		props.setContent(e.target.value);
	};

    return (
        <>
            <TextField
                id="outlined-basic"
                label="タイトル"
                variant="outlined"
                fullWidth
                margin="normal"
                value={props.title}
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
                value={props.content}
                multiline
                fullWidth
                onChange={onChangeContent}
            />
        </>
    );
}
