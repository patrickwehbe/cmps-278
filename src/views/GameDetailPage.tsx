// src/containers/gameDetailPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import GameDetail from "../components/GameDetails";
import { useGetOneGameQuery } from "../api/games.api";
import { useGetAllGamesQuery } from "../api/games.api";
import GameCardTemplate2 from "../components/GamesCardTemplate2";
import { Link } from "react-router-dom";
//import { useGetAllGameReviewsQuery } from '../api/Gamereview.api';
//import GameReview from '../components/GameReview';
import { useGetAllUsersQuery } from "../api/user.api";
import "./GameDetails.css";
import Banner from "../components/Banner";
import StyledBanner from "../components/StyledBanner";
import Footer from "../components/Footer";

function GameDetailPage() {
	const { id } = useParams<{ id: string }>();
	const { data: data, isLoading } = useGetOneGameQuery(id);
	const { data: all } = useGetAllGamesQuery({
		pollingInterval: 0,
		refetchOnMountOrArgChange: true,
	});
	/*  const { data: reviews } = useGetAllGameReviewsQuery({
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

	const similarGames =
		all && data
			? all.filter(
					(Game: any) =>
						Game.game_author === data.game_author &&
						Game.game_id !== data.game_id
			  )
			: [];

	/*const filteredReviews = reviews && data
    ? reviews.filter((review: any) => review.Game_fid === data.game_id)
    : [];

  console.log(filteredReviews);
*/
	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<Banner
				image={data.game_image}
				title={data.game_name}
				description={data.game_description}
				rating={data.game_rating}
				trailerUrl={data.game_trailer}
			/>
			<GameDetail
				/*game_image1={data.game_image1}
        game_image2={data.game_image2}
        game_image3={data.game_image3}
        game_image4={data.game_image4}
        game_image5={data.game_image5}
        game_image6={data.game_image6}
        */
				game_author={data.game_author ? data.game_author : ""}
				game_trailer={data.game_trailer}
				game_price={data.game_price}
				game_id={data.game_id}
				game_name={data.game_name}
				game_image={data.game_image}
				game_rating={data.game_rating}
			/>
			<div className="game2">
				{similarGames.map(
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
									color: "inherit",
								}}
							>
								<GameCardTemplate2
									game_id={game.game_id}
									game_name={game.game_name}
									game_rating={game.game_rating}
									game_price={game.game_price}
									game_author={game.game_author ? game.game_author : ""}
									game_image={game.game_image}
									game_trailer={game.game_trailer}
								/>
							</Link>
						</div>
					)
				)}
			</div>
			{/*
      <div className="Gamereview">
        {filteredReviews.map((review: {
          Game_review_id: any,
          num_of_likes: any,
          content: any,
          review_rating: any,
          user_fid: any, // Add user_fid to the review object

        }) => {
            // Find the user object based on the review's user_fid
            const user = users.find((u: any) => u.user_id === review.user_fid);
  
            // Check if the user object exists
            const user_image = user.user_image;
            const user_username = user.user_username;
            console.log(user_image);
  
            return (
              <div className="Gamereview-card">
                <GameReview
                  Game_review_id={review.Game_review_id}
                  num_of_likes={review.num_of_likes}
                  content={review.content}
                  review_rating={review.review_rating}
                  user_image={user_image}
                  user_username={user_username}
                />
              </div>
            );
          })}
        </div>
        */}
			<Footer />
		</div>
	);
}

export default GameDetailPage;
