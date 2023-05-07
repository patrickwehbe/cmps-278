import React from "react";
import { makeStyles } from "@mui/styles";
import { ButtonBase, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
	root: {
		position: "relative",
		borderRadius: 4,
		overflow: "hidden",
		cursor: "pointer",
		"&:hover": {
			"& $overlay": {
				opacity: 0.2,
			},
		},
	},
	image: {
		position: "relative",
		width: "100%",
		height: "auto",
		display: "block",
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(38,30,31,1)",
		opacity: 0,
		transition: "opacity 250ms ease-in-out",
	},
	gradient: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundImage: "linear-gradient(to top, rgb(38, 30, 31), transparent 50%)",
	},
	labelContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		backgroundColor: "rgba(0,0,0,0.7)",
		padding: 8,
	},
	label: {
		color: "rgba(255, 255, 255, 0.6)",
		fontSize: 12,
		fontWeight: 700,
		marginBottom: 4,
	},
	title: {
		color: "#fff",
		fontSize: 14,
		fontWeight: 700,
		lineHeight: 1.2,
	},
	subtitle: {
		color: "#fff",
		fontSize: 12,
		fontWeight: 400,
		lineHeight: 1.2,
	},
}));

interface Props {
	imageUrl: string;
	label: string;
	title: string;
	subtitle: string;
	onClick?: () => void;
}

const AppCard: React.FC<Props> = ({ imageUrl, label, title, subtitle, onClick }) => {
	const classes = useStyles();
	return (
		<ButtonBase className={classes.root} onClick={onClick}>
			<img src={imageUrl} className={classes.image} alt="" />
			<div className={classes.overlay}></div>
			<div className={classes.gradient}></div>
			<div className={classes.labelContainer}>
				<Typography variant="body2" className={classes.label}>
					{label}
				</Typography>
				<Typography variant="subtitle1" className={classes.title}>
					{title}
				</Typography>
				<Typography variant="body2" className={classes.subtitle}>
					{subtitle}
				</Typography>
			</div>
		</ButtonBase>
	);
};

export default AppCard;
