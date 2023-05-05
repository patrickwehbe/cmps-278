// src/components/gameDetail.tsx

import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import "./gameDetails.css";
import { useGetAllGamesQuery } from '../api/games.api';
import StarIcon from '@mui/icons-material/Star'

function GameDetail({ 
    game_id,
    game_name,
    game_image,
    game_trailer,
    game_rating,
    game_price,
    game_author,
    game_image1,
    game_image2,
    game_image3,
    game_image4,
    game_image5,
    game_image6,
  }: any) {
  return (
    <div key={game_id} className="game-detail-container">
      <div className="header-container">
        <div className="name-rating-container">
          <h1 className="game-title">{game_name}</h1>
          
          <img className="gameimage2" src={game_image} alt={game_name} />
          <Box className="rating-wrapper" display="flex">
            <Typography variant="body2" color="text.secondary" className="game-rating">
              {game_rating} <StarIcon sx={{ fontSize: '14px', color: '#ffc107' }} /> 
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '8px' }}>
              {game_price === 0 ? 'Free' : `$${game_price}`}
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
          {/* Add the game_trailer content with a smaller font size and gray color */}
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: '16px', fontWeight: 'bold' }}>
            {game_trailer}
          </Typography>
          {/* Add a container to hold the images */}
          <div className="images-container">
            <img className="gameimage3" src={game_image1} alt={game_name} />
            <img className="gameimage3" src={game_image2} alt={game_name} />
            <img className="gameimage3" src={game_image3} alt={game_name} />
            <img className="gameimage3" src={game_image4} alt={game_name} />
            <img className="gameimage3" src={game_image5} alt={game_name} />
            <img className="gameimage3" src={game_image6} alt={game_name} />
          </div>
          <Typography variant="h5" sx={{ marginTop: '50px' }}>
            Similar Games:
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
