// ApplicationCard.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia, Stack } from "@mui/material";
import "./ApplicationCard.css";

export default function ApplicationCardTemplate({
  application_id,
  application_name,
  application_image,
  application_trailer,
  application_rating,
  application_price,
  application_author,
}: any) {
  return (
    <Card className="card" sx={{ maxHeight: 80, maxWidth: 220, backgroundColor: "transparent", border: "none", boxShadow: "none" }} key={application_id}>
      <CardActionArea>
      <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
          <div className="appId">
            <Typography variant="body2" color="text.secondary" component="div">
              {application_id}
            </Typography>
          </div>
          <div className="appImage">
            <img className="appimage1" src={application_image} alt={application_name} />
          </div>
          <div className="appDetails">
            <Typography variant="body1" component="div">
              {application_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {application_author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {application_rating}
            </Typography>
          </div>
        </Stack>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
