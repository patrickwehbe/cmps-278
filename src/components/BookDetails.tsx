// src/components/bookDetail.tsx

import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import "./BookDetails.css";
import { useGetAllBooksQuery } from '../api/books.api';

function bookDetail({ 
    book_id,
    book_name,
    book_image,
    book_trailer,
    book_rating,
    book_price,
    book_author,
    book_image1,
    book_image2,
    book_image3,
    book_image4,
    book_image5,
    book_image6,
  }: any) {
  return (
    <div key={book_id} className="book-detail-container">
      <div className="header-container">
        <div className="name-rating-container">
          <h1 className="app-title">{book_name}</h1>
          <img className="appimage2" src={book_image} alt={book_name} />
          <Box className="rating-wrapper" display="flex">
            <Typography variant="body2" color="text.secondary" className="book-rating">
              {book_rating}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '8px' }}>
              {book_price === 0 ? 'Free' : `$${book_price}`}
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
          {/* Add the book_trailer content with a smaller font size and gray color */}
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: '16px', fontWeight: 'bold' }}>
            {book_trailer}
          </Typography>
          {/* Add a container to hold the images */}
          <div className="images-container">
            <img className="bookimage3" src={book_image1} alt={book_name} />
            <img className="bookimage3" src={book_image2} alt={book_name} />
            <img className="bookimage3" src={book_image3} alt={book_name} />
            <img className="bookimage3" src={book_image4} alt={book_name} />
            <img className="bookimage3" src={book_image5} alt={book_name} />
            <img className="bookimage3" src={book_image6} alt={book_name} />
          </div>
          <Typography variant="h5" sx={{ marginTop: '50px' }}>
            Similar Books:
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default bookDetail;
