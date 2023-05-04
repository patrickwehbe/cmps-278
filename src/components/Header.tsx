import * as React from "react";
import { useState } from "react";
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

	return (
		<AppBar
			position="static"
			sx={{ bgcolor: "#fff", color: "#000", marginBottom: "80px" }}
		>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Box display="flex" alignItems="center">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s" />
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
						<StyledTab label="Games" value={false} />
						<StyledTab label="Apps" value={false} />
						<StyledTab label="Movies" value={false} />
						<StyledTab label="Books" value={false} />
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
