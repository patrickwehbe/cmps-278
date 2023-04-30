import React from "react";
import "./Book.css";
import BookCardTemplate from "../components/BooksCardTemplate";
import { useGetAllBooksQuery } from "../api/books.api";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Book() {
	const { currentData, isError, isLoading, isSuccess, error, isFetching } =
		useGetAllBooksQuery({
			pollingInterval: 0, // disable polling for this query
			refetchOnMountOrArgChange: true,
		});

	if (isError) return <div>An error has occurred!</div>;

	if (isFetching && !currentData)
		return (
			<Box sx={{ overflow: "hidden" }}>
				<Skeleton variant="text" />
			</Box>
		);
	return (
		<div className="book">
			{currentData.map(
				(book: {
					book_id: any;
					book_name: any;
					book_cover: any;
					book_rating: any;
					book_price: any;
					book_author: any;
				}) => (
					<BookCardTemplate
						book_id={book.book_id}
						book_name={book.book_name}
						book_rating={book.book_rating}
						book_price={book.book_price}
						book_author={book.book_author}
						book_cover={book.book_cover}
					/>
				)
			)}
		</div>
	);
}

export default Book;
