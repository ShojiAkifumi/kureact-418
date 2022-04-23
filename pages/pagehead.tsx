import Head from "next/head";
type Props = {
	title: string;
	description: string;
};
const PageHead = (props: Props) => {
	return (
		<Head>
			<title>{props.title}</title>
			<meta name="description" content={props.description} />
		</Head>
	);
};

export default PageHead;
