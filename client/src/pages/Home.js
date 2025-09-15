import React, { useState, useEffect } from 'react';
import Placeholder from '../components/ui/Placeholder';
import Banner from '../components/ui/Banner';
import RatingPopup from '../components/ui/RatingPopup';
import './Home.css';
import { ITEMS_PER_PAGE } from '../constants/themes';
import { generateMockItems } from '../utils/helpers';

const Home = ({ onItemClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerRow = 2;
  const [ratings, setRatings] = useState({});
  const [ratingPopupItem, setRatingPopupItem] = useState(null);

  // Mock data - replace with actual data fetching
  const mockItems = generateMockItems(50).map((item, index) => ({
    ...item,
    rating: ratings[item.id] || item.rating
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

  const totalPages = Math.ceil(mockItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
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