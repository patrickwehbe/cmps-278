// src/components/movieDetail.tsx

import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import "./MovieDetails.css";
import { useGetAllMoviesQuery } from '../api/movie.api';
import StarIcon from '@mui/icons-material/Star'

function MovieDetail({ 
    movie_id,
    movie_name,
    movie_image,
    movie_trailer,
    movie_rating,
    movie_price,
    movie_author,
    movie_description,
    movie_image1,
    movie_image2,
    movie_image3,
    movie_image4,
    movie_image5,
    movie_image6,
  }: any) {
  return (
    <div key={movie_id} className="movie-detail-container">
      <div className="header-container">
        <div className="name-rating-container">
          <h1 className="movie-title">{movie_name}</h1>
          <img className="movieimage2" src={movie_image} alt={movie_name} />
          <Box className="rating-wrapper" display="flex">
            <Typography variant="body2" color="text.secondary" className="movie-rating">
              {movie_rating} <StarIcon sx={{ fontSize: '14px', color: '#ffc107' }} /> 
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '8px' }}>
              {movie_price === 0 ? 'Free' : `$${movie_price}`}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'darkgreen',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1rem',
              padding: '4px',
              width: '150px',
              marginTop: '35px',
              textTransform: 'none',
              minWidth: '0',
            }}
          >
            Add to Wishlist
          </Button>
          {/* Add the "Description" heading */}
          <Typography variant="h5" sx={{ marginTop: '50px' }}>
            Description:
          </Typography>
          {/* Add the movie_trailer content with a smaller font size and gray color */}
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: '16px', fontWeight: 'bold' }}>
            {movie_description}
          </Typography>
          {/* Add a container to hold the images */}
          {/*
          <div className="images-container">
            <img className="movieimage3" src={movie_image1} alt={movie_name} />
            <img className="movieimage3" src={movie_image2} alt={movie_name} />
            <img className="movieimage3" src={movie_image3} alt={movie_name} />
            <img className="movieimage3" src={movie_image4} alt={movie_name} />
            <img className="movieimage3" src={movie_image5} alt={movie_name} />
            <img className="movieimage3" src={movie_image6} alt={movie_name} />
          </div>
        */}
          <Typography variant="h5" sx={{ marginTop: '7%' }}>
            Similar Movies:
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
