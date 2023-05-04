import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { application } from "express";
import "./AppReview.css";

export default function ApplicationCardTemplate2({
    app_review_id,
    user_fid,
    app_fid,
    num_of_likes,
    content,
    review_rating,
    user_image,
    user_username,
}: any) {
  return (
    <Card sx={{ maxWidth: 1000 }} key={app_review_id}>
      <CardActionArea>
        <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <div className="reviewDetails">
            <img className="userimageapp" src={user_image}/>
            <Typography variant="body1" component="div" className="appreview_username">
              {user_username}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="appreview_rating">
              {review_rating}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: '16px', fontWeight: 'bold' }}>
            {content}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="appreview_likes">
              {num_of_likes}
            </Typography>
          </div>
        </Stack>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}