import { createTheme } from "@mui/material/styles";
import { amber, deepOrange } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		background: {
			default: "#f5f5f5",
		},
		primary: {
			main: amber[800],
		},
		secondary: {
			main: deepOrange[500],
		},
	},
});

export default theme;
