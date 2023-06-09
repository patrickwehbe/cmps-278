// src/containers/ApplicationDetailPage.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ApplicationDetail from "../components/AppDetails";
import { useGetOneApplicationQuery } from "../api/applications.api";
import { useGetAllApplicationsQuery } from "../api/applications.api";
import ApplicationCardTemplate2 from "../components/ApplicationCardTemplate2";
import { Link } from "react-router-dom";
import { useGetAllAppReviewsQuery } from "../api/appreview.api";
import AppReview from "../components/AppReview";
import { useGetAllUsersQuery } from "../api/user.api";
import "./AppDetails.css";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

function ApplicationDetailPage() {
	const { id } = useParams<{ id: string }>();
	const { data: data, isLoading } = useGetOneApplicationQuery(id);
	const { data: all } = useGetAllApplicationsQuery({
		pollingInterval: 0,
		refetchOnMountOrArgChange: true,
	});
	const { data: reviews } = useGetAllAppReviewsQuery({
		pollingInterval: 0,
		refetchOnMountOrArgChange: true,
	});
	console.log(reviews);

	const { data: users } = useGetAllUsersQuery(undefined, {
		pollingInterval: 0,
		refetchOnMountOrArgChange: true,
	});
	console.log(users);

	const similarApps =
		all && data
			? all.filter(
					(app: any) =>
						app.application_author === data.application_author &&
						app.application_id !== data.application_id
			  )
			: [];

	const filteredReviews =
		reviews && data
			? reviews.filter((review: any) => review.app_fid === data.application_id)
			: [];

	console.log(filteredReviews);

	const calculateAverageRating = () => {
		if (filteredReviews.length === 0) {
			return 0;
		}

		const sumRatings = filteredReviews.reduce(
			(sum: any, review: any) => sum + review.review_rating,
			0
		);
		return sumRatings / filteredReviews.length;
	};

	const averageRating = calculateAverageRating();

	const calculateRatingPercentages = () => {
		const ratingCounts = [0, 0, 0, 0, 0];

		filteredReviews.forEach((review: any) => {
			ratingCounts[review.review_rating - 1]++;
		});

		const totalRatings = filteredReviews.length;
		const percentages = ratingCounts.map((count) =>
			totalRatings === 0 ? 0 : (count / totalRatings) * 100
		);

		return percentages;
	};

	const renderRatingBars = () => {
		const ratingPercentages = calculateRatingPercentages();

		return ratingPercentages.map((percentage, index) => (
			<Box
				key={index}
				sx={{
					display: "flex",
					alignItems: "center",
					marginBottom: 1,
					marginLeft: "7%",
					marginRight: "7%",
					width: "50%",
				}}
			>
				<Box
					sx={{
						marginRight: 1,
					}}
				>
					{index + 1}
				</Box>
				<LinearProgress
					variant="determinate"
					value={percentage}
					sx={{
						flexGrow: 1,
						marginRight: 1,
					}}
				/>
				<Box
					sx={{
						marginLeft: 1,
					}}
				></Box>
			</Box>
		));
	};

	const [showAllReviews, setShowAllReviews] = useState(false);

	const reviewsToShow = showAllReviews ? filteredReviews : filteredReviews.slice(0, 5);

	const handleShowMoreReviews = () => {
		setShowAllReviews(!showAllReviews);
	};

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<ApplicationDetail
				application_image1={data.application_image1}
				application_image2={data.application_image2}
				application_image3={data.application_image3}
				application_image4={data.application_image4}
				application_image5={data.application_image5}
				application_image6={data.application_image6}
				application_author={data.application_author}
				application_trailer={data.application_trailer}
				application_price={data.application_price}
				application_id={data.application_id}
				application_name={data.application_name}
				application_image={data.application_image}
				application_rating={data.application_rating}
			/>

			<div className="application2">
				{similarApps.map(
					(application: {
						application_id: any;
						application_name: any;
						application_image: any;
						application_trailer: any;
						application_rating: any;
						application_price: any;
						application_author: any;
					}) => (
						<div className="application-card">
							<Link
								to={`/applications/${application.application_id}`}
								style={{
									textDecoration: "none",
									color: "inherit",
								}}
							>
								<ApplicationCardTemplate2
									application_id={application.application_id}
									application_name={application.application_name}
									application_rating={application.application_rating}
									application_price={application.application_price}
									application_author={application.application_author}
									application_image={application.application_image}
									application_trailer={application.application_trailer}
								/>
							</Link>
						</div>
					)
				)}
			</div>

			<div className="appreview">
				<h2 style={{ marginLeft: "7%" }}>
					Average rating based on recent reviews: {averageRating.toFixed(1)}
				</h2>
				{renderRatingBars()}

				{reviewsToShow.map(
					(review: {
						app_review_id: any;
						num_of_likes: any;
						content: any;
						review_rating: any;
						user_fid: any; // Add user_fid to the review object
					}) => {
						// Find the user object based on the review's user_fid
						const user =
							users &&
							users.find((u: any) => u.user_id === review.user_fid);

						// Check if the user object exists
						const user_image = user && user.user_image;
						const user_username = user && user.user_username;
						console.log(user_image);

						return (
							<div className="appreview-card">
								<AppReview
									app_review_id={review.app_review_id}
									num_of_likes={review.num_of_likes}
									content={review.content}
									review_rating={review.review_rating}
									user_image={user_image}
									user_username={user_username}
								/>
							</div>
						);
					}
				)}
				<Button onClick={handleShowMoreReviews} style={{ marginLeft: "7%" }}>
					{showAllReviews ? "Show Less Reviews" : "Show More Reviews"}
				</Button>
			</div>
		</div>
	);
}

export default ApplicationDetailPage;
