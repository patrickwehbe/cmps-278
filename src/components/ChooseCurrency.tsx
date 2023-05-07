import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

const useStyles = makeStyles({
	root: {
		display: "flex",
		alignItems: "center",
	},
	flag: {
		marginRight: "10px",
		width: "20px",
		height: "20px",
	},
	abbreviation: {
		fontSize: "12px",
		fontWeight: "bold",
	},
	collapse: {
		position: "absolute",
		top: "40px",
		right: "0px",
		backgroundColor: "#fff",
		padding: "10px",
		borderRadius: "4px",
		boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
		zIndex: "1",
	},
	flagOption: {
		display: "flex",
		alignItems: "center",
		marginBottom: "5px",
		cursor: "pointer",
	},
});

const ChooseCurrency = () => {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const [currency, setCurrency] = useState("lbp");

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (value: any) => () => {
		setCurrency(value);
		setIsOpen(false);
	};

	return (
		<div className={classes.root}>
			<IconButton onClick={handleToggle}>
				<img
					src={
						currency === "lbp"
							? "https://cdn.countryflags.com/thumbs/lebanon/flag-400.png"
							: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png"
					}
					alt={currency}
					className={classes.flag}
				/>
				<span className={classes.abbreviation}>{currency.toUpperCase()}</span>
				<ArrowDropDown />
			</IconButton>
			{isOpen && (
				<div className={classes.collapse}>
					<div className={classes.flagOption} onClick={handleSelect("lbp")}>
						<img
							src="https://cdn.countryflags.com/thumbs/lebanon/flag-400.png"
							alt="LBP"
							className={classes.flag}
						/>
						<span className={classes.abbreviation}>LBP</span>
					</div>
					<div className={classes.flagOption} onClick={handleSelect("usd")}>
						<img
							src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png"
							alt="USD"
							className={classes.flag}
						/>
						<span className={classes.abbreviation}>USD</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default ChooseCurrency;
