import { Box, Container } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
	const [navToggle, setNavToggle] = useState("header-nav-wrapper");

	const navToggleAction = () => {
		if (navToggle === "header-nav-wrapper") {
			setNavToggle("header-nav-wrapper open");
		} else {
			setNavToggle("header-nav-wrapper");
		}
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="static" sx={{ padding: "16px 0" }}>
				<Container>
					<Box className="header-wrapper">
						<Link href="/" passHref>
							<Typography variant="h1" className="header-logo">
								Kureact-418
							</Typography>
						</Link>
						<Box className={navToggle}>
							<nav>
								<Link href="/preview">投稿一覧</Link>
								<Link href="/add">追加</Link>
								<Link href="/login">ログイン</Link>
							</nav>
							<div onClick={navToggleAction} className="hamburger">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</Box>
					</Box>
				</Container>
			</AppBar>
		</React.Fragment>
	);
}
