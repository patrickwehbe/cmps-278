import React from "react";

import MovieCardTemplate from "../components/MovieCardTemplate";
import { useGetAllMoviesQuery } from "../api/movie.api";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Movie() {
	const { currentData, isError, isLoading, isSuccess, error, isFetching } =
		useGetAllMoviesQuery({
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
		<div className="movie">
			{currentData.map(
				(movie: {
					movie_id: any;
					movie_name: any;
					movie_image: any;
					movie_rating: any;
					movie_price: any;
					movie_director: any;
					date_released: any;
				}) => (
					<MovieCardTemplate
						movie_id={movie.movie_id}
						movie_name={movie.movie_name}
						movie_rating={movie.movie_rating}
						movie_price={movie.movie_price}
						movie_director={movie.movie_director}
						movie_image={movie.movie_image}
						date_released={movie.date_released}
					/>
				)
			)}
		</div>
	);
}

export default Movie;
