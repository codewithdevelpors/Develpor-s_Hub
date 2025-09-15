import React, { useState, useEffect } from 'react';
import Placeholder from './Placeholder';
import Banner from './Banner';
import RatingPopup from './RatingPopup';
import './Home.css';

const Home = ({ onItemClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const itemsPerRow = 2;
  const [ratings, setRatings] = useState({});
  const [ratingPopupItem, setRatingPopupItem] = useState(null);

  // Mock data - replace with actual data fetching
  const mockItems = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    img: `https://via.placeholder.com/300x200?text=Item+${i + 1}`,
    fileName: `File ${i + 1}.txt`,
    fileType: 'Text File',
    rating: ratings[i + 1] || (Math.floor(Math.random() * 5) + 1),
    uploadingData: `Uploaded ${Math.floor(Math.random() * 30) + 1} days ago`,
    shortDescription: `This is a short description for item ${i + 1}. It contains some useful information about the file.`
  }));

  const handleRateItem = (itemId, rating) => {
    setRatings(prev => ({
      ...prev,
      [itemId]: rating
    }));
  };

  const handleNextClick = (item) => {
    setRatingPopupItem(item);
  };

  const handleRatingSubmit = (itemId, rating) => {
    handleRateItem(itemId, rating);
    setRatingPopupItem(null);
    // After rating, navigate to detail page
    const item = mockItems.find(item => item.id === itemId);
    if (item) {
      onItemClick(item);
    }
  };

  const closeRatingPopup = () => {
    setRatingPopupItem(null);
  };

  const totalPages = Math.ceil(mockItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = mockItems.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className="home-container">
      <Banner onItemClick={onItemClick} />

      <div className="placeholders-grid">
        {currentItems.map((item) => (
          <Placeholder
            key={item.id}
            item={item}
            onNextClick={handleNextClick}
          />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>

      {ratingPopupItem && (
        <RatingPopup
          item={ratingPopupItem}
          onClose={closeRatingPopup}
          onRate={handleRatingSubmit}
        />
      )}
    </div>
  );
};

export default Home;