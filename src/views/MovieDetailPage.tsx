// src/containers/movieDetailPage.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetails";
import { useGetOneMovieQuery } from "../api/movie.api";
import { useGetAllMoviesQuery } from "../api/movie.api";
import MovieCardTemplate2 from "../components/MovieCardTemplate2";
import { Link } from "react-router-dom";
//import { useGetAllmovieReviewsQuery } from "../api/Moviereview.api";
//import MovieReview from "../components/MovieReview";
import { useGetAllUsersQuery } from "../api/user.api";
import "./MovieDetails.css";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

function MovieDetailPage() {
	const { id } = useParams<{ id: string }>();
	const { data: data, isLoading } = useGetOneMovieQuery(id);
	const { data: all } = useGetAllMoviesQuery({
		pollingInterval: 0,
		refetchOnMountOrArgChange: true,
	});
	/*const { data: reviews } = useGetAllMoviesReviewsQuery({
		pollingInterval: 0,
		refetchOnMountOrArgChange: true,
	});
	console.log(reviews);
*/
	const { data: users } = useGetAllUsersQuery(undefined, {
		pollingInterval: 0,
		refetchOnMountOrArgChange: true,
	});
	console.log(users);

	const SimilarMovies =
		all && data
			? all.filter(
					(movie: any) =>
						movie.movie_author === data.movie_author &&
						movie.movie_id !== data.movie_id
			  )
			: [];
/*
	const filteredReviews =
		reviews && data
			? reviews.filter((review: any) => review.movie_fid === data.movie_id)
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
*/
	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<MovieDetail
				movie_author={data.movie_author ? data.movie_author : ""}
				movie_trailer={data.movie_trailer}
				movie_price={data.movie_price}
				movie_id={data.movie_id}
				movie_name={data.movie_name}
				movie_image={data.movie_image}
				movie_rating={data.movie_rating}
                movie_description={data.movie_description}
			/>
			<div className="movie2">
				{SimilarMovies.map(
					(movie: {
						movie_id: any;
						movie_name: any;
						movie_image: any;
						movie_trailer: any;
						movie_rating: any;
						movie_price: any;
						movie_author: any;
                        movie_description: any;
					}) => (
						<div className="movie-card">
							<Link
								to={`/movies/${movie.movie_id}`}
								style={{
									textDecoration: "none",
									color: "inherit",
								}}
							>
                
								<MovieCardTemplate2
									movie_id={movie.movie_id}
									movie_name={movie.movie_name}
									movie_rating={movie.movie_rating}
									movie_price={movie.movie_price}
									movie_author={movie.movie_author  ? movie.movie_author : ''}
									movie_image={movie.movie_image}
									movie_trailer={movie.movie_trailer}
                                    movie_description={movie.movie_description}
								/>
							</Link>
						</div>
					)
				)}
			</div>
{/*
			<div className="moviereview">
				<h2 style={{ marginLeft: "7%" }}>
					Average rating based on recent reviews: {averageRating.toFixed(1)}
				</h2>
				{renderRatingBars()}

				{reviewsToShow.map(
					(review: {
						movie_review_id: any;
						num_of_likes: any;
						content: any;
						review_rating: any;
						user_fid: any; // Add user_fid to the review object
					}) => {
						// Find the user object based on the review's user_fid
						const user =
							users &&
							users.find((u: any) => u.user_id === review.user_fid);

						// Check if the user object exists
						const user_image = user && user.user_image;
						const user_username = user && user.user_username;
						console.log(user_image);

						return (
							<div className="moviereview-card">
								<MovieReview
									movie_review_id={review.movie_review_id}
									num_of_likes={review.num_of_likes}
									content={review.content}
									review_rating={review.review_rating}
									user_image={user_image}
									user_username={user_username}
								/>
							</div>
						);
					}
				)}
				<Button onClick={handleShowMoreReviews} style={{ marginLeft: "7%" }}>
					{showAllReviews ? "Show Less Reviews" : "Show More Reviews"}
				</Button>
                
			</div>
            */}
		</div>
	);
}

export default MovieDetailPage;
