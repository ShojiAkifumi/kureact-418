import React from "react";
import Header from "./header";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { motion } from "framer-motion";
type Props = {
	children: React.ReactNode;
};
export default function Layout(props: Props) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 10 }}
				transition={{
					duration: 0.3,
				}}
			>
				<Container sx={{ marginTop: { xs: "32px", md: "64px" } }}>
					{props.children}
				</Container>
			</motion.div>
		</ThemeProvider>
	);
}
