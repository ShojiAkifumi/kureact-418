import React from "react";
import Header from "./header";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
type Props = {
	title: string;
	children: React.ReactNode;
};
export default function Layout(props: Props) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Container sx={{ marginTop: { xs: "32px", md: "64px" } }}>
				{props.children}
			</Container>
		</ThemeProvider>
	);
}
