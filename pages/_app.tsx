import type { AppProps } from "next/app";
import "../styles/global.scss";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router }: AppProps) => (
	<AnimatePresence exitBeforeEnter>
		<Component key={router.asPath} {...pageProps} />
	</AnimatePresence>
);

export default MyApp;
