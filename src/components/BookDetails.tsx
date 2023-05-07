// src/components/bookDetail.tsx

import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./BookDetails.css";
import { useGetAllBooksQuery } from "../api/books.api";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrency } from "../redux/auth";

function BookDetail({
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

	useEffect(() => {}, [dispatch, currency]);
	return (
		<div key={book_id} className="book-detail-container">
			<div className="header-container">
				<div className="name-rating-container">
					<h1 className="book-title">{book_name}</h1>
					<Typography
						variant="body2"
						color="text.secondary"
						className="book-rating"
					>
						{book_author ? book_author : ""}
					</Typography>
					<img className="bookimage2" src={book_cover} alt={book_name} />
					<Box className="rating-wrapper" display="flex">
						<Typography
							variant="body2"
							color="text.secondary"
							className="book-rating"
						>
							{book_rating}{" "}
							<StarIcon sx={{ fontSize: "14px", color: "#ffc107" }} />
						</Typography>

						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ marginLeft: "8px" }}
						>
							{book_price === 0
								? "Free"
								: `${currency + " " + book_price} `}
						</Typography>
					</Box>
					<Button
						variant="contained"
						sx={{
							backgroundColor: "darkgreen",
							color: "white",
							fontWeight: "bold",
							fontSize: "1rem",
							padding: "4px",
							width: "150px",
							marginTop: "35px",
							textTransform: "none",
							minWidth: "0",
						}}
					>
						Add to Wishlist
					</Button>
					{/* Add the "Description" heading */}
					<Typography variant="h5" sx={{ marginTop: "50px" }}>
						Description:
					</Typography>
				</div>
			</div>
		</div>
	);
}

export default BookDetail;
