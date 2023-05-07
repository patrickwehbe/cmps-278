import * as React from "react";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import ChooseCurrency from "./ChooseCurrency";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth";

interface HeaderProps {
	onTabChange: (newValue: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onTabChange }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
		setActiveTab(newValue);
	};

	const [isScrolled, setIsScrolled] = useState(false);
	const [activeTab, setActiveTab] = useState<string>("Games");
	const user = useSelector(selectUser);

	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		console.log(user);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<AppBar
			position="fixed"
			sx={{
				bgcolor: isScrolled ? "white" : "transparent",
				color: "#000",

				position: "sticky",
				boxShadow: isScrolled ? "0px 0px 10px rgba(0, 0, 0, 0.2)" : "none",
				transition: "box-shadow 0.3s ease-in-out",
				padding: "0px 20px",
			}}
		>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Box display="flex" alignItems="center">
					<img
						src="https://logos-world.net/wp-content/uploads/2020/12/Google-Play-Logo.png"
						style={{ objectFit: "contain", height: "80px" }}
					/>
					<StyledTabs
						value={false}
						onChange={handleTabChange}
						aria-label="header tabs"
						TabIndicatorProps={{
							style: {
								backgroundColor: "#3cba54",
								height: "3px",
								borderTopLeftRadius: "3px",
								borderTopRightRadius: "3px",
							},
						}}
					>
						<StyledTab
							label="Games"
							value="Games"
							sx={activeTab === "Games" ? activeTabClass : {}}
							onClick={() => {
								setActiveTab("Games");
								navigate("/games");
							}}
						/>
						<StyledTab
							label="Apps"
							value="Apps"
							sx={activeTab === "Apps" ? activeTabClass : {}}
							onClick={() => {
								setActiveTab("Apps");
								navigate("/applications");
							}}
						/>
						<StyledTab
							label="Movies"
							value="Movies"
							sx={activeTab === "Movies" ? activeTabClass : {}}
							onClick={() => {
								setActiveTab("Movies");
								navigate("/movies");
							}}
						/>
						<StyledTab
							label="Books"
							value="Books"
							sx={activeTab === "Books" ? activeTabClass : {}}
							onClick={() => {
								setActiveTab("Books");
								navigate("/books");
							}}
						/>
					</StyledTabs>
				</Box>
				<Box display="flex" alignItems="center">
					<IconButton aria-label="help">
						<HelpOutlineIcon />
					</IconButton>
					<IconButton aria-label="avatar" onClick={handleMenuOpen}>
						<StyledAvatar
							alt={user?.user_username.charAt(0)}
							src={user?.user_image}
						/>
					</IconButton>
					<ChooseCurrency />
					<StyledMenu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleMenuClose}
					>
						<StyledMenuItem onClick={() => navigate("/wishlist")}>
							Wishlist
						</StyledMenuItem>
						<StyledMenuItem onClick={() => navigate("/visited")}>
							Last visited
						</StyledMenuItem>
						<StyledMenuItem onClick={handleMenuClose}>Profile</StyledMenuItem>
						<StyledMenuItem onClick={handleMenuClose}>logout</StyledMenuItem>
					</StyledMenu>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

const StyledTabs = styled(Tabs)({
	"& .MuiTab-root": {
		fontWeight: "bold",
		textTransform: "none",
		minWidth: "unset",
		padding: "6px 16px",
		margin: "0 6px",
		"&.Mui-selected": {
			color: "#3cba54",
			"& .MuiTabIndicator-root": {
				backgroundColor: "#3cba54",
				height: "3px",
				borderTopLeftRadius: "3px",
				borderTopRightRadius: "3px",
			},
		},
		"&:hover": {
			backgroundColor: grey[100],
		},
	},
});

const StyledTab = styled(Tab)({
	minWidth: "unset",
});

const activeTabClass = {
	color: "#3cba54",
	"&::before": {
		content: '""',
		display: "block",
		height: "3px",
		backgroundColor: "#3cba54",
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
	},
};

const StyledAvatar = styled(Avatar)({
	width: "32px",
	height: "32px",
});

const StyledMenu = styled(Menu)({
	"& .MuiMenu-paper": {
		boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
	},
});

const StyledMenuItem = styled(MenuItem)({
	fontWeight: "bold",
});

export default Header;
