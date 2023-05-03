import React from "react";
import "./Book.css";
import BooksCardTemplate from "../components/BooksCardTemplate";
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
		const maxRecommendedBooks = 10;
		function shuffleArray(array: any[]) {
			for (let i = array.length - 1; i > 0; i--) {
			  const j = Math.floor(Math.random() * (i + 1));
			  [array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		  }

		  function getRandomUniqueBooks(array: any[], exclude: any[], count: number) {
			const uniqueBooks = array.filter((book) => !exclude.includes(book));
			return shuffleArray(uniqueBooks).slice(0, count);
		  }
		  
		  const shuffledBooks = shuffleArray([...currentData]);
		  const recommendedBooks = shuffledBooks.slice(0, maxRecommendedBooks);
		  const newReleasesBooks = getRandomUniqueBooks(currentData, recommendedBooks, maxRecommendedBooks);
		  const topSellingBooks = getRandomUniqueBooks(currentData, [...recommendedBooks, ...newReleasesBooks], maxRecommendedBooks);
		  
		  const chunkSize = 3;
		  const chunkedData = currentData
			? currentData.reduce((resultArray: any[][], item: any, index: number) => {
				const chunkIndex = Math.floor(index / chunkSize);
		  
				if (!resultArray[chunkIndex]) {
				  resultArray[chunkIndex] = [];
				}
		  
				resultArray[chunkIndex].push(item);
		  
				return resultArray;
			  }, [])
			: [];
		  
			return (
				<div>
				  
				  <h2 className="recommendedtext">Recommended for you</h2>
				  <div className="book2">
					{recommendedBooks.map(
					  (book: {
						book_id: any,
						book_title: any,
						book_cover: any,
						book_preview: any,
						book_rating: any,
						book_price: any,
						book_author: any,
					  }) => (
						<div className="book-card">
						  <BooksCardTemplate
							book_id={book.book_id}
							book_title={book.book_title}
							book_rating={book.book_rating}
							book_price={book.book_price}
							book_author={book.book_author}
							book_cover={book.book_cover}
							book_preview={book.book_preview}
						  />
						</div>
					  )
					)}
				  </div>
			  
				  <h2 className="recommendedtext">New Releases</h2>
				  <div className="book2">
					{newReleasesBooks.map(
					  (book: {
						book_id: any,
						book_title: any,
						book_cover: any,
						book_preview: any,
						book_rating: any,
						book_price: any,
						book_author: any,
					  }) => (
						<div className="book-card">
						  <BooksCardTemplate
							book_id={book.book_id}
							book_title={book.book_title}
							book_rating={book.book_rating}
							book_price={book.book_price}
							book_author={book.book_author}
							book_cover={book.book_cover}
							book_preview={book.book_preview}
						  />
						</div>
					  )
					)}
				  </div>
			  
				  <h2 className="recommendedtext">Top Selling</h2>
				  <div className="book2">
					{topSellingBooks.map(
					  (book: {
						book_id: any,
						book_title: any,
						book_cover: any,
						book_preview: any,
						book_rating: any,
						book_price: any,
						book_author: any,
					  }) => (
						<div className="book-card">
						  <BooksCardTemplate
							book_id={book.book_id}
							book_title={book.book_title}
							book_rating={book.book_rating}
							book_price={book.book_price}
							book_author={book.book_author}
							book_cover={book.book_cover}
							book_preview={book.book_preview}
						  />
						</div>
					  )
					)}
				  </div>
				</div>
			  );
			  
					  }
export default Book;
