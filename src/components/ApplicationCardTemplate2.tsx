import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { application } from "express";
import "./ApplicationCardTemplate2.css";

export default function ApplicationCardTemplate2({
    application_id,
    application_name,
    application_image,
    application_trailer,
    application_rating,
    application_price,
    application_author,
}: any) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "none" }} key={application_id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={application_image}
          alt={application_name}
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '30px'
          }}
        />
        <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <div className="appDetails2">
            <Typography variant="body1" component="div" className="application-card-name">
              {application_name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="application-card-rating">
              {application_rating}
            </Typography>
          </div>
        </Stack>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
