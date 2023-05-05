/* eslint-disable prettier/prettier */
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./BooksCardTemplate.css";
import StarIcon from '@mui/icons-material/Star'


export default function BookCardTemplate({
  book_id,
  book_name,
  book_cover,
  book_rating,
  book_price,
  book_author,
}: any) {
  return (
    <Card sx={{ maxWidth: 345 }} key={book_id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={book_cover}
          alt={book_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book_author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book_price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book_rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
