import React from "react";
import "./Game.css";
import { useGetAllGamesQuery } from "../api/games.api";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import GameCardTemplate from "../components/GamesCardTemplate";
import GameCardTemplate2 from "../components/GamesCardTemplate2";
import NewsletterPopup from "../components/Newsletterpopup";
import { CircularProgress } from "@mui/material";

function game() {
	const { currentData, isError, isLoading, isSuccess, error, isFetching } =
		useGetAllGamesQuery({
			pollingInterval: 0, // disable polling for this query
			refetchOnMountOrArgChange: true,
		});

	if (isError) return <div>An error has occurred!</div>;

	if (isLoading) return <CircularProgress />;

	if (isFetching && !currentData)
		return (
			<Box sx={{ overflow: "hidden" }}>
				<Skeleton variant="text" />
			</Box>
		);

	const maxRecommendedGames = 10;

	// Function to shuffle an array
	function shuffleArray(array: any[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	function getRandomUniqueGames(array: any[], exclude: any[], count: number) {
		const uniqueGames = array.filter((game) => !exclude.includes(game));
		return shuffleArray(uniqueGames).slice(0, count);
	}

	const shuffledGames = shuffleArray([...currentData]);
	const recommendedGames = shuffledGames.slice(0, maxRecommendedGames);
	const newReleasesGames = getRandomUniqueGames(
		currentData,
		recommendedGames,
		maxRecommendedGames
	);
	const topSellingGames = getRandomUniqueGames(
		currentData,
		[...recommendedGames, ...newReleasesGames],
		maxRecommendedGames
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
		<div>
			<div className="game">
				<NewsletterPopup />
				{chunkedData.map((column: any[], columnIndex: any) => (
					<div key={`column-${columnIndex}`} className="game-column">
						{column.map((game) => (
							<div key={game.game_id} className="game-card-wrgameer">
								<Link
									to={`/games/${game.game_id}`}
									style={{
										textDecoration: "none",
										color: "inherit", // Adjust the color value as needed
									}}
								>
									<GameCardTemplate
										className="game-card1"
										game_id={game.game_id}
										game_name={game.game_name}
										game_rating={game.game_rating}
										game_price={game.game_price}
										game_author={game.game_author}
										game_image={game.game_image}
										game_trailer={game.game_trailer}
									/>
								</Link>
							</div>
						))}
					</div>
				))}
			</div>
			<h2 className="recommendedtext">Recommended for you</h2>
			<div className="game2">
				{recommendedGames.map(
					(game: {
						game_id: any;
						game_name: any;
						game_image: any;
						game_trailer: any;
						game_rating: any;
						game_price: any;
						game_author: any;
					}) => (
						<div className="game-card">
							<Link
								to={`/games/${game.game_id}`}
								style={{
									textDecoration: "none",
									color: "inherit", // Adjust the color value as needed
								}}
							>
								<GameCardTemplate2
									game_id={game.game_id}
									game_name={game.game_name}
									game_rating={game.game_rating}
									game_price={game.game_price}
									game_author={game.game_author}
									game_image={game.game_image}
									game_trailer={game.game_trailer}
								/>
							</Link>
						</div>
					)
				)}
			</div>

			<h2 className="recommendedtext">New Releases</h2>
			<div className="game2">
				{newReleasesGames.map(
					(game: {
						game_id: any;
						game_name: any;
						game_image: any;
						game_trailer: any;
						game_rating: any;
						game_price: any;
						game_author: any;
					}) => (
						<div className="game-card">
							<Link
								to={`/games/${game.game_id}`}
								style={{
									textDecoration: "none",
									color: "inherit", // Adjust the color value as needed
								}}
							>
								<GameCardTemplate2
									game_id={game.game_id}
									game_name={game.game_name}
									game_rating={game.game_rating}
									game_price={game.game_price}
									game_author={game.game_author}
									game_image={game.game_image}
									game_trailer={game.game_trailer}
								/>
							</Link>
						</div>
					)
				)}
			</div>

			<h2 className="recommendedtext">Top Selling</h2>
			<div className="game2">
				{topSellingGames.map(
					(game: {
						game_id: any;
						game_name: any;
						game_image: any;
						game_trailer: any;
						game_rating: any;
						game_price: any;
						game_author: any;
					}) => (
						<div className="game-card">
							<Link
								to={`/games/${game.game_id}`}
								style={{
									textDecoration: "none",
									color: "inherit", // Adjust the color value as needed
								}}
							>
								<GameCardTemplate2
									game_id={game.game_id}
									game_name={game.game_name}
									game_rating={game.game_rating}
									game_price={game.game_price}
									game_author={game.game_author}
									game_image={game.game_image}
									game_trailer={game.game_trailer}
								/>
							</Link>
						</div>
					)
				)}
			</div>
		</div>
	);
}

export default game;
