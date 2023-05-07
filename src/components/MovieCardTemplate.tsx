import React, { useState } from "react";
import {
	Modal,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { PlayCircleOutline } from "@mui/icons-material";

export default function MovieCardTemplate({
	movie_id,
	movie_name,
	movie_image,
	movie_rating,
	movie_price,
	movie_director,
	date_released,
	movie_trailer,
}: any) {
	const [openModal, setOpenModal] = useState(false);

	const handlePlayClick = () => {
		setOpenModal(true);
	};

	const handleModalClose = () => {
		setOpenModal(false);
	};

	return (
		<Card sx={{ boxShadow: "none" }} key={movie_id}>
			<CardMedia
				component="div"
				style={{
					width: "300px",
					height: "300px",
					objectFit: "cover",
					borderRadius: "30px",
					position: "relative",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img
					src={movie_image}
					alt={movie_name}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
						borderRadius: "30px",
					}}
				/>
				<Button
					variant="contained"
					size="large"
					sx={{
						display: "flex",
						bgcolor: "rgba(0, 0, 0, 0.6)",
						"&:hover": { bgcolor: "rgba(0, 0, 0, 0.8)" },
						borderRadius: "100px",
						position: "absolute",
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
			</CardMedia>

			<CardContent>
				<Stack
					direction={{ xs: "column", sm: "row" }}
					alignItems="center"
					spacing={2}
				>
					<div className="appDetails2">
						<Typography
							variant="body1"
							component="div"
							className="movie-card-name"
						>
							{movie_name}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							className="movie-card-rating"
						>
							{movie_rating}{" "}
							<StarIcon
								sx={{ fontSize: "14px", color: "#ffc107" }}
								aria-label="rating"
							/>
						</Typography>
					</div>
				</Stack>
			</CardContent>

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
						src={movie_trailer}
						allow="accelerometer; autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						frameBorder={0}
					/>
				</div>
			</Modal>
		</Card>
	);
}
