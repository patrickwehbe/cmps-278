// src/containers/ApplicationDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ApplicationDetail from '../components/AppDetails';
import { useGetOneApplicationQuery } from '../api/applications.api'; // Import the hook to fetch application by ID

function ApplicationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: data, isLoading } = useGetOneApplicationQuery(id);
  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ApplicationDetail
        application_id={data.application_id}
        application_name={data.application_name}
        application_image={data.application_image}
        application_rating={data.application_rating}
      />
    </div>
  );
}

export default ApplicationDetailPage;
