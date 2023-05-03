import React from "react";
import "./Application.css";
import ApplicationCardTemplate from "../components/ApplicationCardTemplate";
import ApplicationCardTemplate2 from "../components/ApplicationCardTemplate2";
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
		const chunkSize = 3;
		const chunkedData = currentData
		  ? currentData.reduce((resultArray: any[][], item: any, index: number) => {
			  const chunkIndex = Math.floor(index / chunkSize);
	  
			  if (!resultArray[chunkIndex]) {
				resultArray[chunkIndex] = [];
			  }
	  
			  resultArray[chunkIndex].push(item);
	  
			  return resultArray;
			}, [])
		  : [];
	  
		  return (
			<div>
			  <div className="application">
				{chunkedData.map((column: any[], columnIndex: any) => (
				  <div key={`column-${columnIndex}`} className="application-column">
					{column.map((application) => (
					  <div key={application.application_id} className="application-card-wrapper">
						<ApplicationCardTemplate className="application-card1"
						  application_id={application.application_id}
						  application_name={application.application_name}
						  application_rating={application.application_rating}
						  application_price={application.application_price}
						  application_author={application.application_author}
						  application_image={application.application_image}
						  application_trailer={application.application_trailer}
						/>
					  </div>
					))}
				  </div>
				))}
			  </div>
			  <h2 className="recommendedtext">Recommended for you</h2>
			  <div className="application2">
  {currentData.map(
    (application: {
      application_id: any,
      application_name: any,
      application_image: any,
      application_trailer: any,
      application_rating: any,
      application_price: any,
      application_author: any,
    }) => (
      <div className="application-card"> 
        <ApplicationCardTemplate2
          application_id={application.application_id}
          application_name={application.application_name}
          application_rating={application.application_rating}
          application_price={application.application_price}
          application_author={application.application_author}
          application_image={application.application_image}
          application_trailer={application.application_trailer}
        />
      </div>
    )
  )}
</div>

			</div>
		  );
		}

export default Application;
