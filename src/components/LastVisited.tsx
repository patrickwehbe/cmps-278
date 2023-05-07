import React from "react";
import { useSelector } from "react-redux";

import { Grid, Typography, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Book, Movie, Gamepad, Apps } from "@mui/icons-material";
import { selectLastVisited } from "../redux/auth";

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

interface LastVisitedItem {
	title: string;
	image: string;
	url: string;
}

interface FilteredLastVisited {
	title: string;
	items: LastVisitedItem[];
}

const LastVisited: React.FC = () => {
	const classes = useStyles();
	const lastVisited = useSelector(selectLastVisited);

	const filterLastVisited = (filter: string): FilteredLastVisited => {
		const filteredItems = lastVisited
			.filter((item: any) => item.filter === filter)
			.slice(-24)
			.map((item: any) => {
				return {
					title: item.title,
					image: item.image,
					url: item.url,
				};
			});
		return { title: filter, items: filteredItems };
	};

	const filteredLastVisited: FilteredLastVisited[] = [
		filterLastVisited("applications"),
		filterLastVisited("movies"),
		filterLastVisited("books"),
		filterLastVisited("games"),
	];

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
									filtered.items.map((item) => (
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
export default LastVisited;
