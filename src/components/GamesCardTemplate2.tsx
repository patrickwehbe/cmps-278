import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import "./GamesCardTemplate2.css";

export default function GameCardTemplate2({
    game_id,
    game_name,
    game_image,
    game_trailer,
    game_rating,
    game_price,
    game_author,
}: any) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "none" }} key={game_id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={game_image}
          alt={game_name}
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '30px',
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), -2px 0 4px rgba(0, 0, 0, 0.1), 2px 0 4px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.1)"
          }}
        />
        <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <div className="gameDetails2">
            <Typography variant="body1" component="div" className="game-card-name">
              {game_name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="game-card-rating">
              {game_rating}
            </Typography>
          </div>
        </Stack>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}