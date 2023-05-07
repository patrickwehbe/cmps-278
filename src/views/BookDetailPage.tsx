// src/containers/bookDetailPage.tsx
import { useParams } from "react-router-dom";
import BookDetail from "../components/BookDetails";
import { useGetOneBookQuery } from "../api/books.api";
import { useGetAllBooksQuery } from "../api/books.api";
import BookCardTemplate from "../components/BooksCardTemplate";
import { Link } from "react-router-dom";
import { useGetAllUsersQuery } from '../api/user.api';
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useGetAllBookReviewsQuery } from "../api/bookreview.api";




function BookDetailPage() {
	const { id } = useParams<{ id: string }>();
	const { data: data, isLoading } = useGetOneBookQuery(id);
	const { data: all } = useGetAllBooksQuery({
		pollingInterval: 0,
		refetchOnMountOrArgChange: true,
	});

	const similarBooks =
		all && data
			? all.filter(
					(book: any) =>
						book && book.book_author == data.book_author &&
						book.book_id != data.book_id
			  )
			: [];
			const { data: reviews } = useGetAllBookReviewsQuery({
				pollingInterval: 0,
				refetchOnMountOrArgChange: true,
			});
			console.log(reviews);
		
			const { data: users } = useGetAllUsersQuery(undefined, {
				pollingInterval: 0,
				refetchOnMountOrArgChange: true,
			});
			console.log(users);
		
			const filteredReviews =
				reviews && data
					? reviews.filter((review: any) => review.book_fid === data.book_id)
					: [];
		
			console.log(filteredReviews);
		
			const calculateAverageRating = () => {
				if (filteredReviews.length === 0) {
					return 0;
				}
		
				const sumRatings = filteredReviews.reduce(
					(sum: any, review: any) => sum + review.review_rating,
					0
				);
				return sumRatings / filteredReviews.length;
			};
		
			const averageRating = calculateAverageRating();
		
			const calculateRatingPercentages = () => {
				const ratingCounts = [0, 0, 0, 0, 0];
		
				filteredReviews.forEach((review: any) => {
					ratingCounts[review.review_rating - 1]++;
				});
		
				const totalRatings = filteredReviews.length;
				const percentages = ratingCounts.map((count) =>
					totalRatings === 0 ? 0 : (count / totalRatings) * 100
				);
		
				return percentages;
			};
		
			const renderRatingBars = () => {
				const ratingPercentages = calculateRatingPercentages();
		
				return ratingPercentages.map((percentage, index) => (
					<Box
						key={index}
						sx={{
							display: "flex",
							alignItems: "center",
							marginBottom: 1,
							marginLeft: "7%",
							marginRight: "7%",
							width: "50%",
						}}
					>
						<Box
							sx={{
								marginRight: 1,
							}}
						>
							{index + 1}
						</Box>
						<LinearProgress
							variant="determinate"
							value={percentage}
							sx={{
								flexGrow: 1,
								marginRight: 1,
							}}
						/>
						<Box
							sx={{
								marginLeft: 1,
							}}
						></Box>
					</Box>
				));
			};
		
			const [showAllReviews, setShowAllReviews] = useState(false);
		
			const reviewsToShow = showAllReviews ? filteredReviews : filteredReviews.slice(0, 5);
		
			const handleShowMoreReviews = () => {
				setShowAllReviews(!showAllReviews);
			};
		

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<BookDetail

				book_author={data.book_author ? data.book_author : '' }
				book_trailer={data.book_trailer}
				book_price={data.book_price}
				book_id={data.book_id}
				book_name={data.book_name}
				book_cover={data.book_cover}
				book_rating={data.book_rating}
			/>

			<div className="book2">
				{similarBooks.map(
					(book: {
						book_id: any;
						book_name: any;
						book_cover: any;
						book_trailer: any;
						book_rating: any;
						book_price: any;
						book_author: any;
					}) => (
						<div className="book-card">
							<Link
								to={`/books/${book.book_id}`}
								style={{
									textDecoration: "none",
									color: "inherit",
								}}
							>
								<BookCardTemplate
									book_id={book.book_id}
									book_name={book.book_name}
									book_rating={book.book_rating}
									book_price={book.book_price}
									book_author={book.book_author ? book.book_author : '' }
									book_cover={book.book_cover}
									book_trailer={book.book_trailer}
								/>
							</Link>
						</div>
					)
				)}
			</div>
		</div>
	);
}

export default BookDetailPage;
