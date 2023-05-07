/* eslint-disable prettier/prettier */
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./BooksCardTemplate.css";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrency } from "../redux/auth";

export default function BookCardTemplate({
	book_id,
	book_name,
	book_cover,
	book_rating,
	book_price,
	book_author,
}: any) {
	const dispatch = useDispatch();
	const currency = useSelector(selectCurrency);
	currency === "LBP" ? (book_price = book_price * 89000) : book_price;
	return (
		<Card sx={{ maxWidth: 345 }} key={book_id}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="300"
					image={book_cover}
					alt={book_name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{book_name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{book_author}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{book_price == 0 ? "Free" : book_price + currency}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{book_rating}{" "}
						<StarIcon sx={{ fontSize: "14px", color: "#ffc107" }} />
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions></CardActions>
		</Card>
	);
}
