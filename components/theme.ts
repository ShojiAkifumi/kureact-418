import { createTheme } from "@mui/material/styles";
import { amber, blueGrey } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		background: {
			default: "#f5f5f5",
		},
		primary: {
			main: amber[800],
		},
		secondary: {
			main: blueGrey[300],
		},
	},
});

export default theme;
