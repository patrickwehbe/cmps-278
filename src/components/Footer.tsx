import { Container, Divider, Grid, Link, Typography, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";

interface Country {
	name: string;
}

const theme = createTheme({
	palette: {
		primary: {
			main: "#f2f2f2",
		},
		secondary: {
			main: "#fbc02d",
		},
	},
	spacing: 8,
});

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		paddingTop: theme.spacing(6),
		paddingBottom: theme.spacing(6),
		marginTop: theme.spacing(6),
	},
	logo: {
		width: 150,
		marginBottom: theme.spacing(2),
	},
	link: {
		marginRight: theme.spacing(2),
		"&:hover": {
			textDecoration: "none",
			color: theme.palette.secondary.main,
		},
	},
	socialIcon: {
		color: theme.palette.common.white,
		marginRight: theme.spacing(2),
		"&:hover": {
			color: theme.palette.secondary.main,
		},
	},
}));

const Footer: React.FC = () => {
	const classes = useStyles();

	const [userCountry, setUserCountry] = useState<Country | null>(null);

	useEffect(() => {
		const fetchCountry = async (latitude: number, longitude: number) => {
			try {
				const response = await fetch(
					`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
				);
				const data = await response.json();
				setUserCountry({ name: data.countryName });
			} catch (error) {
				console.error(error);
			}
		};

		const getLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) =>
						fetchCountry(position.coords.latitude, position.coords.longitude),
					(error) => console.error(error)
				);
			} else {
				console.error("Geolocation is not supported by this browser.");
			}
		};

		getLocation();
	}, []);

	return (
		<>
			<Divider />
			<footer className={classes.root}>
				<Container maxWidth="lg">
					<Grid container justifyContent="space-between" alignItems="center">
						<Grid item>
							<Typography variant="h6">Google Store</Typography>
						</Grid>
						<Grid item>
							<Link href="#" className={classes.link}>
								About
							</Link>
							<Link href="#" className={classes.link}>
								Blog
							</Link>
							<Link href="#" className={classes.link}>
								Privacy
							</Link>
							<Link href="#" className={classes.link}>
								Terms
							</Link>
							<Link href="#" className={classes.link}>
								Contact
							</Link>
							<Link href="#" className={classes.socialIcon}>
								<i className="fab fa-facebook-f"></i>
							</Link>
							<Link href="#" className={classes.socialIcon}>
								<i className="fab fa-twitter"></i>
							</Link>
							<Link href="#" className={classes.socialIcon}>
								<i className="fab fa-instagram"></i>
							</Link>
						</Grid>
					</Grid>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
