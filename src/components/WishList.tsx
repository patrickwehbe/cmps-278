import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, Grid, Paper, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { addWishlist, selectWishlist } from "../redux/auth";
import { useSelector } from "react-redux";

interface WishlistItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	isFavorite: boolean;
}

interface WishlistProps {
	items: WishlistItem[];
}

const theme = createTheme({
	palette: {
		primary: {
			main: "#f44336",
		},
		secondary: {
			main: "#3f51b5",
		},
	},
	spacing: 8,
});

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			flexGrow: 1,
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: "center",
			color: theme.palette.text.secondary,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
		},
		image: {
			maxWidth: "100%",
			height: "auto",
		},
		favoriteIcon: {
			color: theme.palette.primary.main,
			marginLeft: "auto",
			alignSelf: "flex-end",
		},
	})
);

const Wishlist: React.FC = () => {
	const classes = useStyles();
	const items = useSelector(selectWishlist) as any;
	console.log(items);

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					{items.map((item: any) => {
						if (item.filter == "applications") {
							return (
								<Paper
									className={classes.paper}
									key={item.application_id}
								>
									<img
										src={item.application_image}
										alt={item.application_name}
										className={classes.image}
									/>
									<Typography variant="h6">
										{item.application_name}
									</Typography>
									<Typography variant="body1">
										{item.application_author}
									</Typography>
									<Typography variant="body1">
										{item.application_price}
									</Typography>
									<FavoriteBorder className={classes.favoriteIcon} />
								</Paper>
							);
						}
					})}
				</Grid>
			</Grid>
		</div>
	);
};

export default Wishlist;
