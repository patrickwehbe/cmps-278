import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// @ts-ignore
export default function ApplicationCardTemplate({
	application_id,
	application_name,
	application_image,
	application_rating,
	application_price,
	application_author,
}: any) {
	return (
		<Card sx={{ maxWidth: 345 }} key={application_id}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={application_image}
					alt={application_name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{application_name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{application_author}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{application_price}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{application_rating}
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