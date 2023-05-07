import React from "react";
import { makeStyles } from "@mui/styles";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
	createTheme,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const theme = createTheme({
	spacing: 8,
	palette: {
		primary: {
			main: "#3f51b5",
		},
		common: {
			white: "#ffffff",
		},
	},
});

// Define styles for the component
const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	card: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		width: 640,
		height: 360,
		borderRadius: 16,
		boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.12)",
		overflow: "hidden",
	},
	media: {
		width: "100%",
		height: "100%",
		backgroundImage: (props: { image: string }) => `url(${props.image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
		width: 280,
		height: "100%",
		padding: theme.spacing(3),

		color: theme.palette.common.white,
	},
	category: {
		textTransform: "uppercase",
		fontWeight: "bold",
		letterSpacing: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		borderRadius: 16,
	},
	title: {
		fontWeight: "bold",
		marginTop: theme.spacing(2),
	},
	description: {
		marginTop: theme.spacing(1),
	},
	smallImage: {
		width: 64,
		height: 64,
		objectFit: "cover",
		borderRadius: "50%",
	},
	smallTitle: {
		fontWeight: "bold",
		marginTop: theme.spacing(1),
	},
	installButton: {
		marginLeft: "auto",
		backgroundColor: theme.palette.common.white,
		color: theme.palette.primary.main,
		borderRadius: 32,
		fontWeight: "bold",
		"&:hover": {
			backgroundColor: theme.palette.common.white,
		},
	},
}));

// Define the banner data type
interface Banner {
	category: string;
	image: string;
	title: string;
	description: string;
	smallImage: string;
	smallTitle: string;
}

// Define the component props
interface BannerCarouselProps {
	banners: Banner[];
}

// Define the BannerCarousel component
const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			{banners.map((banner, index) => (
				<Card
					key={index}
					className={classes.card}
					style={{ backgroundImage: `url(${banner.image})` }}
				>
					<CardContent className={classes.content}>
						<Typography variant="subtitle1" className={classes.category}>
							{banner.category}
						</Typography>
						<Typography variant="h5" className={classes.title}>
							{banner.title}
						</Typography>
						<Typography variant="body1" className={classes.description}>
							{banner.description}
						</Typography>
						<Box display="flex" flexDirection="row" alignItems="center">
							<Box
								className={classes.smallImage}
								style={{ backgroundImage: `url(${banner.image})` }}
							/>

							<Typography
								variant="subtitle2"
								className={classes.smallTitle}
							>
								{banner.smallTitle}
							</Typography>
							<Button
								className={classes.installButton}
								variant="contained"
								endIcon={<ArrowForward />}
							>
								Install
							</Button>
						</Box>
					</CardContent>
				</Card>
			))}
		</Box>
	);
};

export default BannerCarousel;
