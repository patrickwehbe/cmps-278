/* eslint-disable prettier/prettier */
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import StarIcon from '@mui/icons-material/Star'


function formatDate(dateString: string | number | Date) {
	const date = new Date(dateString);
	const options = { year: "numeric", month: "long", day: "numeric" };
	return date.toLocaleDateString("en-US", options as any);
}

export default function MovieCardTemplate({
	movie_id,
	movie_name,
	movie_image,
	movie_rating,
	movie_price,
	movie_director,
	date_released,
}: any) {
	return (
		<Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 345 }} key={movie_id}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="440"
					image={movie_image}
					alt={movie_name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{movie_name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{movie_director}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{movie_price}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{movie_rating} <StarIcon sx={{ fontSize: '14px', color: '#ffc107' }} /> 
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{formatDate(date_released)}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
			</CardActions>
		</Card>
	);
}
