// FameCard.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia, Stack } from "@mui/material";
import "./GamesCard.css";
import StarIcon from "@mui/icons-material/Star";

export default function GameCardTemplate({
	game_id,
	game_name,
	game_image,
	game_trailer,
	game_rating,
	game_price,
	game_author,
	game_type,
}: any) {
	return (
		<Card
			className="card"
			sx={{ borderRadius: "12px", boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)" }}
			key={game_id}
		>
			<CardActionArea
				sx={{ display: "flex", flexDirection: "column", padding: "16px" }}
			>
				<CardMedia
					component="img"
					height="200"
					image={game_image}
					alt={game_name}
					sx={{ borderRadius: "8px", objectFit: "cover", marginBottom: "16px" }}
				/>
				<Stack sx={{ flexGrow: 1 }} spacing={1}>
					<Typography variant="subtitle1" component="div">
						{game_name}
					</Typography>
					<Typography variant="caption" color="text.secondary">
						{game_author}
					</Typography>
					<Typography variant="caption" color="text.secondary">
						{game_type}
					</Typography>
					<Stack direction="row" alignItems="center" spacing={1}>
						<StarIcon sx={{ fontSize: "14px", color: "#ffc107" }} />
						<Typography variant="caption" color="text.secondary">
							{game_rating}
						</Typography>
						<Typography
							variant="caption"
							color="text.secondary"
							sx={{ flexGrow: 1 }}
						>
							{game_price}
						</Typography>
					</Stack>
				</Stack>
			</CardActionArea>
		</Card>
	);
}
