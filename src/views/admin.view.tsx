// AdminView.tsx

import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card, CardContent, Typography, Link, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Apps, Book, Movie, Gamepad } from "@mui/icons-material";
import { useGetAllUsersQuery } from "../api/user.api";
import { useGetAllBooksQuery } from "../api/books.api";
import { useGetAllApplicationsQuery } from "../api/applications.api";
import { useGetAllGamesQuery } from "../api/games.api";
import { useGetAllMoviesQuery } from "../api/movie.api";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: "50px",
	},
	title: {
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginBottom: "20px",
	},
	card: {
		margin: "10px",
		height: "100%",
	},
	cardContent: {
		padding: "10px",
		textAlign: "center",
	},
	icon: {
		fontSize: "3rem",
		marginBottom: "10px",
	},
}));

const AdminView = () => {
	const classes = useStyles();

	const { data: users } = useGetAllUsersQuery({
		pollingInterval: 60000,
	});
	const { data: books } = useGetAllBooksQuery({
		pollingInterval: 60000,
	});
	const { data: applications } = useGetAllApplicationsQuery({
		pollingInterval: 60000,
	});
	const { data: movies } = useGetAllMoviesQuery({
		pollingInterval: 60000,
	});
	const { data: games } = useGetAllGamesQuery({
		pollingInterval: 60000,
	});

	useEffect(() => {
		setUsersCount(users && users.length);
		setGamesCount(games && games.length);
		setApplicationsCount(applications && applications.length);
		setMoviesCount(movies && movies.length);
		setBooksCount(books && books.length);
	}, [users, games, applications, movies, books]);

	const [usersCount, setUsersCount] = useState(users && users.length);
	const [gamesCount, setGamesCount] = useState(games && games.length);
	const [applicationsCount, setApplicationsCount] = useState(
		applications && applications.length
	);
	const [moviesCount, setMoviesCount] = useState(movies && movies.length);
	const [booksCount, setBooksCount] = useState(books && books.length);

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardContent className={classes.cardContent}>
							<Apps className={classes.icon} />
							<Typography
								className={classes.title}
								variant="h2"
								component="h2"
								color="textPrimary"
								gutterBottom
							>
								Users
							</Typography>

							<Typography variant="body1" component="p" color="textPrimary">
								<Link
									component={RouterLink}
									to="/admin/users"
									color="inherit"
								>
									{usersCount} users
								</Link>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardContent className={classes.cardContent}>
							<Apps className={classes.icon} />
							<Typography
								className={classes.title}
								variant="h2"
								component="h2"
								color="textPrimary"
								gutterBottom
							>
								Applications
							</Typography>

							<Typography variant="body1" component="p" color="textPrimary">
								<Link
									component={RouterLink}
									to="/admin/applications"
									color="inherit"
								>
									{applicationsCount} items
								</Link>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardContent className={classes.cardContent}>
							<Apps className={classes.icon} />
							<Typography
								className={classes.title}
								variant="h2"
								component="h2"
								color="textPrimary"
								gutterBottom
							>
								Books
							</Typography>

							<Typography variant="body1" component="p" color="textPrimary">
								<Link
									component={RouterLink}
									to="/admin/books"
									color="inherit"
								>
									{booksCount} books
								</Link>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardContent className={classes.cardContent}>
							<Apps className={classes.icon} />
							<Typography
								className={classes.title}
								variant="h2"
								component="h2"
								color="textPrimary"
								gutterBottom
							>
								Movies
							</Typography>

							<Typography variant="body1" component="p" color="textPrimary">
								<Link
									component={RouterLink}
									to="/admin/movies"
									color="inherit"
								>
									{moviesCount} movies
								</Link>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardContent className={classes.cardContent}>
							<Apps className={classes.icon} />
							<Typography
								className={classes.title}
								variant="h2"
								component="h2"
								color="textPrimary"
								gutterBottom
							>
								Games
							</Typography>

							<Typography variant="body1" component="p" color="textPrimary">
								<Link
									component={RouterLink}
									to="/admin/games"
									color="inherit"
								>
									{gamesCount} games
								</Link>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default AdminView;
