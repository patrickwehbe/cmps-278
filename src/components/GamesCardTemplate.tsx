/* eslint-disable prettier/prettier */
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function GameCardTemplate({
  game_id,
  game_name,
  game_image,
  game_rating,
  game_price,
  game_trailer,
  game_type,
}: any) {
  return (
    <Card sx={{ maxWidth: 345 }} key={game_id}>
      <CardMedia
        component="iframe"
        height="140"
        title="YouTube video"
        frameBorder="0"
        src={game_trailer}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {game_type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {game_price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {game_rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {game_trailer}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
