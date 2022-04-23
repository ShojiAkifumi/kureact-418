import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html lang="ja">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};
export default Document;
