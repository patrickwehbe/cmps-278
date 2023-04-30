import React from "react";
import "./Game.css";
import { useGetAllGamesQuery } from "../api/games.api";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import GameCardTemplate from "../components/GamesCardTemplate";

function Game() {
	const { currentData, isError, isLoading, isSuccess, error, isFetching } =
		useGetAllGamesQuery({
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
		<div className="game">
			{currentData.map(
				(game: {
					game_id: any;
					game_name: any;
					game_image: any;
					game_rating: any;
					game_price: any;
					game_trailer: any;
                    game_type: any;
				}) => (
					<GameCardTemplate
						game_id={game.game_id}
						game_name={game.game_name}
						game_rating={game.game_rating}
						game_price={game.game_price}
						game_author={game.game_trailer}
						game_cover={game.game_image}
                        game_type={game.game_type}
					/>
				)
			)}
		</div>
	);
}

export default Game;