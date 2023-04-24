import React from "react";
import "./Application.css";
import ApplicationCardTemplate from "../components/ApplicationCardTemplate";
import { useGetAllApplicationsQuery } from "../api/applications.api";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Application() {
	const { currentData, isError, isLoading, isSuccess, error, isFetching } =
		useGetAllApplicationsQuery({
			pollingInterval: 0, // disable polling for this query
			refetchOnMountOrArgChange: true,
		});

	if (isError) return <div>An error has occurred!</div>;

	if (isFetching && !currentData)
		return (
			<Box sx={{ overflow: "hidden" }}>
				<Skeleton variant="text" />
			</Box>
		);
	return (
		<div className="application">
			{currentData.map(
				(application: {
					application_id: any;
					application_name: any;
					application_image: any;
					application_rating: any;
					application_price: any;
					application_author: any;
				}) => (
					<ApplicationCardTemplate
						application_id={application.application_id}
						application_name={application.application_name}
						application_rating={application.application_rating}
						application_price={application.application_price}
						application_author={application.application_author}
						application_image={application.application_image}
					/>
				)
			)}
		</div>
	);
}

export default Application;
