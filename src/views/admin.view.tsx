// AdminView.tsx

import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card, CardContent, Typography, Link, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Apps, Book, Movie, Gamepad } from "@mui/icons-material";

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

	const [usersCount, setUsersCount] = useState(10);
	const [gamesCount, setGamesCount] = useState(20);
	const [applicationsCount, setApplicationsCount] = useState(5);
	const [moviesCount, setMoviesCount] = useState(15);
	const [booksCount, setBooksCount] = useState(30);

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				{filteredLastVisited.map((filtered) => (
					<Grid item xs={12} sm={6} md={4} key={filtered.title}>
						<Card className={classes.card}>
							<CardContent className={classes.cardContent}>
								{filtered.title === "applications" && (
									<Apps className={classes.icon} />
								)}
								{filtered.title === "movies" && (
									<Movie className={classes.icon} />
								)}
								{filtered.title === "books" && (
									<Book className={classes.icon} />
								)}
								{filtered.title === "games" && (
									<Gamepad className={classes.icon} />
								)}
								<Typography
									className={classes.title}
									variant="h2"
									component="h2"
									color="textPrimary"
									gutterBottom
								>
									{filtered.title}
								</Typography>
								{filtered.items.length > 0 ? (
									filtered.items.map((item: any) => (
										<div key={item.title}>
											<a
												href={item.url}
												target="_blank"
												rel="noreferrer"
											>
												<img
													src={item.image}
													alt={item.title}
													width="150"
													height="225"
												/>
												<Typography
													variant="body1"
													component="p"
													color="textPrimary"
												>
													{item.title}
												</Typography>
											</a>
										</div>
									))
								) : (
									<Typography
										variant="body1"
										component="p"
										color="textPrimary"
									>
										No items visited yet.
									</Typography>
								)}
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default AdminView;
