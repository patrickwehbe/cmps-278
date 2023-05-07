// src/components/ApplicationDetail.tsx

import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./AppDetails.css";
import { useGetAllApplicationsQuery } from "../api/applications.api";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { selectUser, selectWishlist, addWishlist, selectCurrency } from "../redux/auth";
import { useSelector } from "react-redux";

function ApplicationDetail({
	application_id,
	application_name,
	application_image,
	application_trailer,
	application_rating,
	application_price,
	application_author,
	application_image1,
	application_image2,
	application_image3,
	application_image4,
	application_image5,
	application_image6,
}: any) {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	var wishlist = useSelector(selectWishlist);
	const application = {
		application_id,
		application_name,
		application_image,
		application_trailer,
		application_rating,
		application_price,
		application_author,
		application_image1,
		application_image2,
		application_image3,
		application_image4,
		application_image5,
		application_image6,
	} as any;
	const handleWishlist = async (item: any) => {
		item.filter = "applications";
		wishlist = [...wishlist, item];

		const res = await fetch(
			`http://localhost:4000/user/profile/changeuserinfo/${user.user_id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					wishlist: JSON.stringify(wishlist),
				}),
			}
		);
	};
	const currency = useSelector(selectCurrency);
	currency === "LBP"
		? (application_price = application_price * 89000)
		: application_price;

	useEffect(() => {}, [dispatch, currency]);
	return (
		<div key={application_id} className="app-detail-container">
			<div className="header-container">
				<div className="name-rating-container">
					<h1 className="app-title">{application_name}</h1>
					<img
						className="appimage2"
						src={application_image}
						alt={application_name}
					/>
					<Box className="rating-wrapper" display="flex">
						<Typography
							variant="body2"
							color="text.secondary"
							className="app-rating"
						>
							{application_rating}{" "}
							<StarIcon sx={{ fontSize: "14px", color: "#ffc107" }} />
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ marginLeft: "8px" }}
						>
							{application_price === 0
								? "Free"
								: `${currency + " " + application_price}`}
						</Typography>
					</Box>
					<Button
						variant="contained"
						sx={{
							backgroundColor: "darkgreen",
							color: "white",
							fontWeight: "bold",
							fontSize: "1rem",
							padding: "4px",
							width: "150px",
							marginTop: "35px",
							textTransform: "none",
							minWidth: "0",
						}}
						onClick={(e) => {
							handleWishlist(application);
							application.filter = "applications";
							dispatch(addWishlist(application));
						}}
					>
						Add to Wishlist
					</Button>
					{/* Add the "Description" heading */}
					<Typography variant="h5" sx={{ marginTop: "50px" }}>
						Description:
					</Typography>
					{/* Add the application_trailer content with a smaller font size and gray color */}
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{ marginTop: "16px", fontWeight: "bold" }}
					>
						{application_trailer}
					</Typography>
					{/* Add a container to hold the images */}
					<div className="images-container">
						<img
							className="appimage3"
							src={application_image1}
							alt={application_name}
						/>
						<img
							className="appimage3"
							src={application_image2}
							alt={application_name}
						/>
						<img
							className="appimage3"
							src={application_image3}
							alt={application_name}
						/>
						<img
							className="appimage3"
							src={application_image4}
							alt={application_name}
						/>
						<img
							className="appimage3"
							src={application_image5}
							alt={application_name}
						/>
						<img
							className="appimage3"
							src={application_image6}
							alt={application_name}
						/>
					</div>
					<Typography variant="h5" sx={{ marginTop: "7%" }}>
						Similar Apps:
					</Typography>
				</div>
			</div>
		</div>
	);
}

export default ApplicationDetail;
