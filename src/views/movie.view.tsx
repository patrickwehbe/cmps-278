import React from "react";
import "./Movie.css";
import MovieCardTemplate from "../components/MovieCardTemplate";
import MovieCardTemplate2 from "../components/MovieCardTemplate2";
import { useGetAllMoviesQuery } from "../api/movie.api";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { CircularProgress } from "@mui/material";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Movie() {
	const { currentData, isError, isLoading, isSuccess, error, isFetching } =
		useGetAllMoviesQuery({
			pollingInterval: 0, // disable polling for this query
			refetchOnMountOrArgChange: true,
		});

	if (isLoading) return;
	<div
		className=""
		style={{ height: "100vh", width: "100vw", display: "grid", placeItems: "center" }}
	>
		<CircularProgress />;
	</div>;

	if (isError) return <div>An error has occurred!</div>;

	if (isFetching && !currentData)
		return (
			<Box sx={{ overflow: "hidden" }}>
				<Skeleton variant="text" />
			</Box>
		);
	const maxRecommendedMovies = 10;
	// Function to shuffle an array
	function shuffleArray(array: any[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	function getRandomUniqueMovies(array: any[], exclude: any[], count: number) {
		const uniqueMovies = array.filter((app) => !exclude.includes(app));
		return shuffleArray(uniqueMovies).slice(0, count);
	}

	const shuffledMovies = shuffleArray([...currentData]);
	const recommendedMovies = shuffledMovies.slice(0, maxRecommendedMovies);
	const newReleasesMovies = getRandomUniqueMovies(
		currentData,
		recommendedMovies,
		maxRecommendedMovies
	);
	const topSellingMovies = getRandomUniqueMovies(
		currentData,
		[...recommendedMovies, ...newReleasesMovies],
		maxRecommendedMovies
	);
	const FamilyMovies = currentData.filter(
		(movie: any) => movie.movie_category == "Family"
	);
	const ActionMovies = currentData.filter(
		(movie: any) => movie.movie_category == "Action and Adventure"
	);
	const ScifiMovies = currentData.filter(
		(movie: any) => movie.movie_category == "Sci-fi"
	);
	const DramaMovies = currentData.filter(
		(movie: any) => movie.movie_category == "Drama"
	);

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
		<>
			<>
				<>
					<>
						<h2 className="recommendedtext">Top Charts</h2>
						<>
							<>
								<>
									<div className="movie">
										{chunkedData.map(
											(column: any[], columnIndex: any) => (
												<div
													key={`column-${columnIndex}`}
													className="movie-column"
												>
													{column.map((movie) => (
														<div
															key={movie.movie_id}
															className="movie-card-wrapper"
														>
															<MovieCardTemplate
																movie_id={movie.movie_id}
																movie_name={
																	movie.movie_name
																}
																movie_rating={
																	movie.movie_rating
																}
																movie_price={
																	movie.movie_price
																}
																movie_director={
																	movie.movie_director
																}
																movie_image={
																	movie.movie_image
																}
																date_released={
																	movie.date_released
																}
																movie_category={
																	movie.movie_category
																}
																movie_trailer={
																	movie.movie_trailer
																}
																movie_description={
																	movie.movie_description
																}
															/>
														</div>
													))}
												</div>
											)
										)}
									</div>
									<h2 className="recommendedtext">
										Recommended for you
									</h2>
									<div className="movie2">
										{recommendedMovies.map(
											(movie: {
												movie_id: any;
												movie_name: any;
												movie_rating: any;
												movie_price: any;
												movie_director: any;
												movie_image: any;
												movie_released: any;
												movie_category: any;
												movie_description: any;
											}) => (
												<div className="movie-card">
													<Link
													to={`/movies/${movie.movie_id}`}
													style={{
														textDecoration: "none",
														color: "inherit", // Adjust the color value as needed
													}}
												>
													<MovieCardTemplate2
														movie_id={movie.movie_id}
														movie_name={movie.movie_name}
														movie_rating={movie.movie_rating}
														movie_price={movie.movie_price}
														movie_director={
															movie.movie_director
														}
														movie_image={movie.movie_image}
														movie_released={
															movie.movie_released
														}
														movie_category={
															movie.movie_category
														}
														movie_description={
															movie.movie_description
														}
													/>
													</Link>
												</div>
											)
										)}
									</div>
								</>
								<h2 className="recommendedtext">New Releases</h2>
								<div className="movie2">
									{newReleasesMovies.map(
										(movie: {
											movie_id: any;
											movie_name: any;
											movie_rating: any;
											movie_price: any;
											movie_director: any;
											movie_image: any;
											movie_released: any;
											movie_category: any;
											movie_description: any;
										}) => (
											<div className="movie-card">
												<Link
													to={`/movies/${movie.movie_id}`}
													style={{
														textDecoration: "none",
														color: "inherit", // Adjust the color value as needed
													}}
												>
												<MovieCardTemplate2
													movie_id={movie.movie_id}
													movie_name={movie.movie_name}
													movie_rating={movie.movie_rating}
													movie_price={movie.movie_price}
													movie_director={movie.movie_director}
													movie_image={movie.movie_image}
													movie_released={movie.movie_released}
													movie_category={movie.movie_category}
													movie_description={
														movie.movie_description
													}
												/>
												</Link>
											</div>
										)
									)}
								</div>
							</>
							<h2 className="recommendedtext">Top Selling</h2>
							<div className="movie2">
								{topSellingMovies.map(
									(movie: {
										movie_id: any;
										movie_name: any;
										movie_rating: any;
										movie_price: any;
										movie_director: any;
										movie_image: any;
										movie_released: any;
										movie_category: any;
										movie_description: any;
									}) => (
										<div className="movie-card">
												<Link
													to={`/movies/${movie.movie_id}`}
													style={{
														textDecoration: "none",
														color: "inherit", // Adjust the color value as needed
													}}
												>
											<MovieCardTemplate2
												movie_id={movie.movie_id}
												movie_name={movie.movie_name}
												movie_rating={movie.movie_rating}
												movie_price={movie.movie_price}
												movie_director={movie.movie_director}
												movie_image={movie.movie_image}
												movie_released={movie.movie_released}
												movie_category={movie.movie_category}
												movie_description={
													movie.movie_description
												}
											/>
											</Link>
										</div>
									)
								)}
							</div>
						</>
						<h2 className="recommendedtext">Family Movies</h2>
						<div className="movie2">
							{FamilyMovies.map(
								(movie: {
									movie_id: any;
									movie_name: any;
									movie_rating: any;
									movie_price: any;
									movie_director: any;
									movie_image: any;
									movie_released: any;
									movie_category: any;
									movie_description: any;
								}) => (
									<div className="movie-card">
										<Link
											to={`/movies/${movie.movie_id}`}
											style={{
											textDecoration: "none",
											color: "inherit", // Adjust the color value as needed
											}}
												>
										<MovieCardTemplate2
											movie_id={movie.movie_id}
											movie_name={movie.movie_name}
											movie_rating={movie.movie_rating}
											movie_price={movie.movie_price}
											movie_director={movie.movie_director}
											movie_image={movie.movie_image}
											movie_released={movie.movie_released}
											movie_category={movie.movie_category}
											movie_description={
												movie.movie_description
											}
										/>
										</Link>
									</div>
								)
							)}
						</div>
					</>
					<h2 className="recommendedtext">Action and Adventure</h2>
					<div className="movie2">
						{ActionMovies.map(
							(movie: {
								movie_id: any;
								movie_name: any;
								movie_rating: any;
								movie_price: any;
								movie_director: any;
								movie_image: any;
								movie_released: any;
								movie_category: any;
								movie_description: any;
							}) => (
								<div className="movie-card">
									<Link
											to={`/movies/${movie.movie_id}`}
											style={{
											textDecoration: "none",
											color: "inherit", // Adjust the color value as needed
											}}
												>
									<MovieCardTemplate2
										movie_id={movie.movie_id}
										movie_name={movie.movie_name}
										movie_rating={movie.movie_rating}
										movie_price={movie.movie_price}
										movie_director={movie.movie_director}
										movie_image={movie.movie_image}
										movie_released={movie.movie_released}
										movie_category={movie.movie_category}
										movie_description={
											movie.movie_description
										}
									/>
									</Link>
								</div>
							)
						)}
					</div>
				</>
				<h2 className="recommendedtext">Sci-fi and Fantasy movies</h2>
				<div className="movie2">
					{ScifiMovies.map(
						(movie: {
							movie_id: any;
							movie_name: any;
							movie_rating: any;
							movie_price: any;
							movie_director: any;
							movie_image: any;
							movie_released: any;
							movie_category: any;
							movie_description: any;
						}) => (
							<div className="movie-card">
											<Link
											to={`/movies/${movie.movie_id}`}
											style={{
											textDecoration: "none",
											color: "inherit", // Adjust the color value as needed
											}}
												>
								<MovieCardTemplate2
									movie_id={movie.movie_id}
									movie_name={movie.movie_name}
									movie_rating={movie.movie_rating}
									movie_price={movie.movie_price}
									movie_director={movie.movie_director}
									movie_image={movie.movie_image}
									movie_released={movie.movie_released}
									movie_category={movie.movie_category}
									movie_description={
										movie.movie_description
									}
								/>
								</Link>
							</div>
						)
					)}
				</div>
			</>
			<h2 className="recommendedtext">Drama</h2>
			<div className="movie2">
				{DramaMovies.map(
					(movie: {
						movie_id: any;
						movie_name: any;
						movie_rating: any;
						movie_price: any;
						movie_director: any;
						movie_image: any;
						movie_released: any;
						movie_category: any;
						movie_description: any;
					}) => (
						<div className="movie-card">
											<Link
											to={`/movies/${movie.movie_id}`}
											style={{
											textDecoration: "none",
											color: "inherit", // Adjust the color value as needed
											}}
												>
							<MovieCardTemplate2
								movie_id={movie.movie_id}
								movie_name={movie.movie_name}
								movie_rating={movie.movie_rating}
								movie_price={movie.movie_price}
								movie_director={movie.movie_director}
								movie_image={movie.movie_image}
								movie_released={movie.movie_released}
								movie_category={movie.movie_category}
								movie_description={
									movie.movie_description
								}
							/>
							</Link>
						</div>
					)
				)}
			</div>
			<Footer />
		</>
	);
}

export default Movie;
