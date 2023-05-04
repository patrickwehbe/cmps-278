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
import { SvgIcon, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

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
		onTabChange(newValue);
	};
	const [isScrolled, setIsScrolled] = useState(false);
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
				marginBottom: "100px",
				padding: "25px 15px",
				position: "sticky",
				boxShadow: isScrolled ? "0px 0px 10px rgba(0, 0, 0, 0.2)" : "none",
				transition: "box-shadow 0.3s ease-in-out",
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
							value={false}
							onClick={() => navigate("/games")}
						/>
						<StyledTab
							label="Apps"
							value={false}
							onClick={() => navigate("/applications")}
						/>
						<StyledTab
							label="Movies"
							value={false}
							onClick={() => navigate("/movies")}
						/>
						<StyledTab
							label="Books"
							value={false}
							onClick={() => navigate("/books")}
						/>
					</StyledTabs>
				</Box>
				<Box display="flex" alignItems="center">
					<IconButton aria-label="search">
						<SearchIcon />
					</IconButton>
					<IconButton aria-label="help">
						<HelpOutlineIcon />
					</IconButton>
					<IconButton aria-label="avatar" onClick={handleMenuOpen}>
						<StyledAvatar
							alt="User Avatar"
							src="https://picsum.photos/id/237/200/200"
						/>
					</IconButton>
					<StyledMenu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleMenuClose}
					>
						<StyledMenuItem onClick={handleMenuClose}>
							Wishlist
						</StyledMenuItem>
						<StyledMenuItem onClick={handleMenuClose}>Profile</StyledMenuItem>
						<StyledMenuItem onClick={handleMenuClose}>
							Login/Logout
						</StyledMenuItem>
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
		},
		"&:hover": {
			backgroundColor: grey[100],
		},
	},
});

const StyledTab = styled(Tab)({
	minWidth: "unset",
});

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
