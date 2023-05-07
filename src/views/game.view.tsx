import { useState } from "react";
import { useGetAllGamesQuery } from "../api/games.api";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import GameCardTemplate from "../components/GamesCardTemplate";
import GameCardTemplate2 from "../components/GamesCardTemplate2";
import NewsletterPopup from "../components/Newsletterpopup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { wishlist } from "../redux/auth";
import BannerCarousel from "../components/BannerCarousel";
import AppCard from "../components/AppCard";

const GameContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	marginTop: "20px",
	marginBottom: "20px",
	padding: "20px",
}));

const GameColumns = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-evenly",
	width: "100%",
	flexWrap: "wrap",
}));

const GameColumn = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	padding: "20px",
	flexBasis: "25%",
	flexShrink: 0,
}));

const SearchContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "20px",
	width: "100%",
}));

const SearchInput = styled(TextField)(({ theme }) => ({
	width: "50%",
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
}));

const FilterSelect = styled(Select)(({ theme }) => ({
	minWidth: "100px",
	marginLeft: "20px",
	[theme.breakpoints.down("sm")]: {
		marginLeft: 0,
		marginTop: "20px",
		minWidth: 0,
		width: "100%",
	},
}));

function Game() {
	const {
		data: currentData,
		isError,
		isLoading,
		isSuccess,
		error,
		isFetching,
	} = useGetAllGamesQuery({
		pollingInterval: 0, // disable polling for this query
		refetchOnMountOrArgChange: true,
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState("");
	const [categoryFilter, setCategoryFilter] = useState("");

	const handleClick = (game: any) => {
		dispatch(wishlist(game));
		navigate(`/games/${game.game_id}`);
	};

	if (isError) return "An error has occurred!";

	if (isLoading) return "Loading...";

	if (isFetching && !currentData)
		return (
			// show skeleton while fetching data
			<GameContainer>
				<GameColumns>
					{[...Array(3)].map((_, index) => (
						<GameColumn key={index}>
							<Skeleton variant="rectangular" width={300} height={300} />
						</GameColumn>
					))}
				</GameColumns>
			</GameContainer>
		);

	const maxRecommendedGames = 10;

	function shuffleArray(array: any) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	function getRandomUniqueGames(array: any, exclude: any, count: any) {
		const uniqueGames = array.filter((game: any) => !exclude.includes(game));
		return shuffleArray(uniqueGames).slice(0, count);
	}

	const filteredData = currentData.filter(
		(game: any) =>
			game.game_name.toLowerCase().includes(keyword.toLowerCase()) &&
			(categoryFilter === "" || categoryFilter === game.game_type)
	);

	const shuffledGames = shuffleArray([...filteredData]);
	const recommendedGames = shuffledGames.slice(0, maxRecommendedGames);
	const newReleasesGames = getRandomUniqueGames(
		filteredData,
		recommendedGames,
		maxRecommendedGames
	);
	const topSellingGames = getRandomUniqueGames(
		filteredData,
		[...recommendedGames, ...newReleasesGames],
		maxRecommendedGames
	);

	const chunkSize = filteredData.length <= 15 ? 1 : 3;
	const chunkedData = filteredData.reduce((resultArray: any, item: any, index: any) => {
		const chunkIndex = Math.floor(index / chunkSize);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = [];
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);

	const categorySet = new Set(currentData.map((game: any) => game.game_type));
	const banners = [
		{
			category: "Special Event",
			image: "https://play-lh.googleusercontent.com/S6JjxuO4N4dlmxGLy7je09jdL9_qacnaU7AcUOW3qygcJogqZpAHQEE6PTgLGsLhkUDitJsMpdE=w648-h364-rw",
			title: "5-star character gacha events",
			description: "Limited-time event",
			smallImage:
				"https://play-lh.googleusercontent.com/vRd2gg6XmC3TRTM5wZZ8qwEc5LMUROh4whycLuiCSPB40tIxDYLT6V0BdCn486XiKQ0=s64-rw",
			smallTitle: "Genshin Impact",
		},
	];

	return (
		<>
		<Carousel
			<AppCard
				imageUrl={
					"https://play-lh.googleusercontent.com/S6JjxuO4N4dlmxGLy7je09jdL9_qacnaU7AcUOW3qygcJogqZpAHQEE6PTgLGsLhkUDitJsMpdE=w648-h364-rw"
				}
				label={"Special Event"}
				title={"Tst"}
				subtitle={"TEt"}
			/>

			<GameContainer>
				<NewsletterPopup />
				<SearchContainer>
					<SearchInput
						label="Search"
						variant="outlined"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
					<FilterSelect
						value={categoryFilter}
						onChange={(e) => setCategoryFilter(e.target.value)}
						displayEmpty
					>
						<MenuItem value="">All</MenuItem>
						{[...categorySet].map((category) => (
							<MenuItem key={category} value={category}>
								{category}
							</MenuItem>
						))}
					</FilterSelect>
				</SearchContainer>
				<GameColumns>
					{chunkedData.map((column: any, columnIndex: any) => (
						<GameColumn key={`column-${columnIndex}`}>
							{column.map((game: any) => (
								<Box
									key={game.game_id}
									mb={3}
									onClick={(e: any) => handleClick(game)}
								>
									<GameCardTemplate
										game_id={game.game_id}
										game_name={game.game_name}
										game_rating={game.game_rating}
										game_price={game.game_price}
										game_author={game.game_author}
										game_image={game.game_image}
										game_trailer={game.game_trailer}
										game_type={game.game_type}
									/>
								</Box>
							))}
						</GameColumn>
					))}
				</GameColumns>
				<Typography variant="h5" style={{ margin: "2rem 0" }}>
					Recommended for you
				</Typography>
				<GameColumns>
					{recommendedGames.map((game: any) => (
						<GameColumn key={game.game_id}>
							<Box mb={3}>
								<GameCardTemplate2
									game_id={game.game_id}
									game_name={game.game_name}
									game_image={game.game_image}
									game_trailer={game.game_trailer}
									game_rating={game.game_rating}
									game_price={game.game_price}
									game_author={game.game_author}
								/>
							</Box>
						</GameColumn>
					))}
				</GameColumns>
			</GameContainer>
		</>
	);
}
export default Game;
