import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { application } from "express";
import "./ApplicationCardTemplate2.css";
import StarIcon from "@mui/icons-material/Star";

export default function ApplicationCardTemplate2({
	application_id,
	application_name,
	application_image,
	application_trailer,
	application_rating,
	application_price,
	application_author,
}: any) {
	return (
		<Card
			sx={{ maxWidth: "160px", minWidth: "160px", boxShadow: "none" }}
			key={application_id}
		>
			<CardActionArea>
				<CardMedia
					component="img"
					height="80px"
					image={application_image}
					alt={application_name}
					style={{
						objectFit: "contain",
						borderRadius: "30px",
						maxWidth: "100px",
						boxShadow:
							"0 2px 4px rgba(0, 0, 0, 0.1), -2px 0 4px rgba(0, 0, 0, 0.1), 2px 0 4px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.1)",
					}}
				/>
				<CardContent>
					<Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
						<div className="appDetails2">
							<Typography
								variant="body1"
								component="div"
								className="application-card-name"
							>
								{application_name}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								className="application-card-rating"
							>
								{application_rating}{" "}
								<StarIcon sx={{ fontSize: "14px", color: "#ffc107" }} />
							</Typography>
						</div>
					</Stack>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
