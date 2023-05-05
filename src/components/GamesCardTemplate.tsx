// FameCard.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia, Stack } from "@mui/material";
import "./GamesCard.css";

export default function GameCardTemplate({
  game_id,
  game_name,
  game_image,
  game_trailer,
  game_rating,
  game_price,
  game_author,
}: any) {
  return (
    <Card className="card" sx={{ maxHeight: 80, maxWidth: 220, backgroundColor: "transparent", border: "none", boxShadow: "none" }} key={game_id}>
      <CardActionArea>
      <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
          <div className="gameId">
            <Typography variant="body2" color="text.secondary" component="div">
              {game_id}
            </Typography>
          </div>
          <div className="gameImage">
            <img className="gameimage1" src={game_image} alt={game_name} />
          </div>
          <div className="gameDetails">
            <Typography variant="body1" component="div">
              {game_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {game_author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {game_rating}
            </Typography>
          </div>
        </Stack>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
