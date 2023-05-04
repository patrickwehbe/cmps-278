// AdminView.tsx

import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card, CardContent, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
	root: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
		gap: "15px",
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: "15px",
		backgroundColor: "white",
		color: "black",
	},
	title: {
		fontSize: "24px",
		fontWeight: "bold",
		marginBottom: "15px",
	},
	count: {
		fontSize: 36,
		fontWeight: "bold",
		marginBottom: "15px",
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
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title}>Users</Typography>
					<Typography className={classes.count}>{usersCount}</Typography>
					<Link component={RouterLink} to="/users" underline="hover">
						View All
					</Link>
				</CardContent>
			</Card>
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title}>Games</Typography>
					<Typography className={classes.count}>{gamesCount}</Typography>
					<Link component={RouterLink} to="/games" underline="hover">
						View All
					</Link>
				</CardContent>
			</Card>
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title}>Applications</Typography>
					<Typography className={classes.count}>{applicationsCount}</Typography>
					<Link component={RouterLink} to="/applications" underline="hover">
						View All
					</Link>
				</CardContent>
			</Card>
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title}>Movies</Typography>
					<Typography className={classes.count}>{moviesCount}</Typography>
					<Link component={RouterLink} to="/movies" underline="hover">
						View All
					</Link>
				</CardContent>
			</Card>
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title}>Books</Typography>
					<Typography className={classes.count}>{booksCount}</Typography>
					<Link component={RouterLink} to="/books" underline="hover">
						View All
					</Link>
				</CardContent>
			</Card>
		</div>
	);
};

export default AdminView;
