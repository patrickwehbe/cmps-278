import * as React from "react";
import { makeStyles, ThemeProvider } from "@mui/styles";
import { Box, Button, createTheme, Modal, Typography } from "@mui/material";
import { Rating } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import { useState } from "react";

interface BannerProps {
	image: string;
	title: string;
	description: string;
	rating: number;
	trailerUrl: string;
}

const theme = createTheme({
	palette: {
		primary: {
			main: "#2196f3",
		},
	},
});

const useStyles = makeStyles({
	banner: {
		position: "relative",
		height: 300,
		background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8))",
		width: "100%",
	},
	imageContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundImage: (props: BannerProps) => `url(${props.image})`,
		filter: "brightness(50%)",
	},
	content: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		padding: theme.spacing(3),
		color: "#ffffff",
	},
	title: {
		fontWeight: "bold",
		marginBottom: theme.spacing(1),
	},
	rating: {
		display: "flex",
		alignItems: "center",
		marginBottom: theme.spacing(1),
	},
	trailerButton: {
		position: "absolute",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
});

export default function Banner(props: BannerProps) {
	const classes = useStyles(props);
	const [openModal, setOpenModal] = useState(false);

	const handlePlayClick = () => {
		setOpenModal(true);
	};

	const handleModalClose = () => {
		setOpenModal(false);
	};

	return (
		<ThemeProvider theme={theme}>
			<Box
				className={classes.banner}
				justifyContent="space-around"
				sx={{ width: "100vw" }}
			>
				<Box className={classes.imageContainer} />
				<Box
					className={classes.content}
					sx={{ width: "100vw", marginLeft: "20px" }}
					justifyContent="space-around"
					alignItems="flex-start"
				>
					<div>
						<Typography variant="h4" className={classes.title}>
							{props.title}
						</Typography>
						<Typography variant="h4" className={classes.title}>
							{props.description}
						</Typography>
						<Box className={classes.rating}>
							<Rating value={props.rating} precision={0.5} readOnly />
							<Typography variant="body2" color="textSecondary">
								({props.rating})
							</Typography>
						</Box>
						<Typography variant="body1">{props.description}</Typography>
					</div>
					<Button
						variant="contained"
						size="large"
						className={classes.trailerButton}
						sx={{
							bgcolor: "rgba(0, 0, 0, 0.6)",
							"&:hover": { bgcolor: "rgba(0, 0, 0, 0.8)" },
							borderRadius: "100px",
						}}
						onClick={handlePlayClick}
					>
						<PlayCircleOutline
							sx={{
								fontSize: "50px",
								color: "#fff",
								backgroundColor: "transparent",
							}}
							aria-label="play"
						/>
					</Button>
					<Modal open={openModal} onClose={handleModalClose}>
						<div
							className=""
							style={{
								display: "grid",
								placeItems: "center",
								height: "100vh",
								width: "100vw",
							}}
						>
							<iframe
								title="movie-player"
								width="853px"
								height="480px"
								src={props.trailerUrl}
								allow="accelerometer; autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								frameBorder={0}
							/>
						</div>
					</Modal>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
