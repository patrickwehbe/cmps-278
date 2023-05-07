import React, { useState } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import {
	IconButton,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
	createTheme,
	Button,
} from "@mui/material";
import { Email } from "@mui/icons-material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#1976d2",
			dark: "#004ba0",
			light: "#63a4ff",
			contrastText: "#fff",
		},
		secondary: {
			main: "#f50057",
			dark: "#c51162",
			light: "#ff4081",
			contrastText: "#fff",
		},
		error: {
			main: "#f44336",
			dark: "#d32f2f",
			light: "#e57373",
			contrastText: "#fff",
		},
		warning: {
			main: "#ff9800",
			dark: "#f57c00",
			light: "#ffb74d",
			contrastText: "#fff",
		},
		info: {
			main: "#2196f3",
			dark: "#1976d2",
			light: "#64b5f6",
			contrastText: "#fff",
		},
		success: {
			main: "#4caf50",
			dark: "#388e3c",
			light: "#81c784",
			contrastText: "#fff",
		},
		text: {
			primary: "#333",
			secondary: "#666",
			disabled: "#999",
		},
		background: {
			default: "#fafafa",
			paper: "#fff",
		},
	},
});

const useStyles = makeStyles(() =>
	createStyles({
		dialogTitle: {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
		},
		dialogContent: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		dialogActions: {
			justifyContent: "center",
		},
		iconButton: {
			position: "fixed",
			bottom: theme.spacing(2),
			right: theme.spacing(2),
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
			"&:hover": {
				backgroundColor: theme.palette.primary.dark,
			},
		},
	})
);

const NewsletterPopup: React.FC = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle className={classes.dialogTitle}>
					Subscribe to Our Newsletter
				</DialogTitle>
				<DialogContent className={classes.dialogContent}>
					<br />
					<Typography variant="body1" align="center" gutterBottom>
						Don't miss out on our latest news and updates!
					</Typography>
					<div
						className=""
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: "100%",
						}}
					>
						<IconButton onClick={handleClose}>
							<Email />
						</IconButton>

						<input type="email" placeholder="you@mail.com" />
					</div>
				</DialogContent>
				<DialogActions className={classes.dialogActions}>
					<Button onClick={handleClose}>Send</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default NewsletterPopup;
