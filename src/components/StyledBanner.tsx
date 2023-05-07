import { FC } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import createTheme, { Theme } from "@mui/material/styles/createTheme";
import { makeStyles } from "@mui/styles";
import { LinearProgress } from "@mui/material";

interface Props {
	className?: string;
}

const BannerGradient = styled("div")(({ theme }) => ({
	backgroundImage: `linear-gradient(to right bottom, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
	height: "100%",
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	opacity: 0.85,
	zIndex: -1,
}));

const BannerImage = styled("div")(({ theme }) => ({
	height: "100%",
	backgroundImage: `url("https://i.ytimg.com/vi/OGudj7-oZo4/hqdefault.jpg"})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const theme = createTheme({
	palette: {
		primary: {
			main: "#7928CA",
			light: "#A952F7",
			dark: "#4C1269",
			contrastText: "#fff",
		},
		secondary: {
			main: "#FF0080",
			light: "#FF52A8",
			dark: "#A60053",
			contrastText: "#fff",
		},
	},
	typography: {
		fontFamily: "'Open Sans', sans-serif",
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});

const useStyles = makeStyles(() => ({
	root: {
		position: "relative",
		height: 400,
		overflow: "hidden",
	},
	content: {
		position: "relative",
		zIndex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		height: "100%",
		padding: "2rem",
		[theme.breakpoints.down("sm")]: {
			alignItems: "center",
			textAlign: "center",
			padding: "1.5rem",
		},
	},
	title: {
		fontWeight: "bold",
		fontSize: "3rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2rem",
		},
	},
	subtitle: {
		fontWeight: "bold",
		fontSize: "1.5rem",
		maxWidth: "40ch",
		margin: "1.5rem 0",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.25rem",
			margin: "1rem 0",
		},
	},
	button: {
		textTransform: "none",
		borderRadius: "999px",
		padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
		fontWeight: "bold",
		[theme.breakpoints.down("sm")]: {
			padding: `${theme.spacing(0.75)} ${theme.spacing(2)}`,
		},
	},
	icon: {
		marginLeft: theme.spacing(1),
	},
	progress: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "transparent",
		"& .MuiLinearProgress-barColorPrimary": {
			backgroundColor: theme.palette.secondary.main,
		},
	},
}));

const Banner: FC<Props> = ({ className }) => {
	const classes = useStyles();

	const handleClick = () => {
		window.location.href =
			"https://play.google.com/store/apps/details?id=com.miraclegames.farlight84";
	};

	return (
		<div className={`${className} ${classes.root}`}>
			<BannerGradient />
			<BannerImage />
			<div className={classes.content}>
				<Typography className={classes.title}>Farlight 84</Typography>
				<Typography className={classes.subtitle}>
					Join the fight for survival in a post-apocalyptic world of 2084.
					Commandeer deadly vehicles and battle your way through the wasteland.
				</Typography>
				<Button
					className={classes.button}
					variant="contained"
					color="secondary"
					onClick={handleClick}
				>
					Download Now
					<ArrowRightAltIcon className={classes.icon} />
				</Button>
			</div>
			<LinearProgress
				className={classes.progress}
				variant="determinate"
				value={100}
			/>
		</div>
	);
};

const StyledBanner = styled(Banner)({
	width: "100%",
});

export default StyledBanner;
