import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import "./MovieCardTemplate2.css";

export default function MovieCardTemplate2({
	movie_id,
	movie_name,
	movie_image,
	movie_rating,
	movie_price,
	movie_director,
	date_released,
}: any) {
	return (
		<Card sx={{ maxWidth: 345, boxShadow: "none" }} key={movie_id}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={movie_image}
					alt={movie_name}
					style={{
						width: "200px",
						height: "200px",
						objectFit: "cover",
						borderRadius: "30px",
					}}
				/>
				<CardContent>
					<Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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
								{movie_rating}
							</Typography>
						</div>
					</Stack>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
