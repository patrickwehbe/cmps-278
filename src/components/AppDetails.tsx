// src/components/ApplicationDetail.tsx
import { Typography } from '@mui/material';
import React from 'react';

function ApplicationDetail({ 
    application_id,
    application_name,
    application_image,
    application_trailer,
    application_rating,
    application_price,
    application_author,
  }: any) {
  return (
    <div key={application_id}>
      <h1>{application_name}</h1>
      <img className="appimage2" src={application_image} alt={application_name} />
      <Typography variant="body2" color="text.secondary">
              {application_rating}
        </Typography>
    </div>
  );
}

export default ApplicationDetail;
