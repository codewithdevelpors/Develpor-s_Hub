import React, { useState, useEffect } from 'react';
import Placeholder from '../../components/Placeholder/Placeholder';
import Banner from '../../components/Banner/Banner';
import RatingPopup from '../../components/RatingPopup/RatingPopup';
import './Home.css';
import { ITEMS_PER_PAGE } from '../../constants/themes';
import { fetchHomePageData, fetchAllPlaceholders } from '../../utils/api';

const Home = ({ onItemClick, searchQuery, onClearSearch }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerRow = 2;
  const [ratings, setRatings] = useState({});
  const [ratingPopupItem, setRatingPopupItem] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // For home page, fetch initial data
        if (!searchQuery) {
          const homeData = await fetchHomePageData(50); // Fetch more items for pagination
          const itemsWithRatings = homeData.map((item, index) => ({
            ...item,
            id: item._id, // Map _id to id for compatibility
            rating: ratings[item._id] || item.rating || 0
          }));
          setItems(itemsWithRatings);
        } else {
          // For search, fetch all data and filter client-side
          const allData = await fetchAllPlaceholders(1, 100); // Fetch more items
          const allItems = allData.data || [];
          const filteredItems = allItems.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
          );
          const itemsWithRatings = filteredItems.map((item, index) => ({
            ...item,
            id: item._id,
            rating: ratings[item._id] || item.rating || 0
          }));
          setItems(itemsWithRatings);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
        // Fallback to empty array
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  // Update ratings when they change
  useEffect(() => {
    setItems(prevItems =>
      prevItems.map(item => ({
        ...item,
        rating: ratings[item.id] || item.rating || 0
      }))
    );
  }, [ratings]);

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
    const item = items.find(item => item.id === itemId);
    if (item) {
      onItemClick(item);
    }
  };

  const closeRatingPopup = () => {
    setRatingPopupItem(null);
  };

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className="home-container">
      {!searchQuery && <Banner onItemClick={onItemClick} />}
      
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner">Loading templates...</div>
        </div>
      )}

      {error && (
        <div className="error-container">
          <div className="error-message">{error}</div>
          <button className="retry-btn" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          {searchQuery && (
            <div className="search-results-header">
              <h2>Search Results for "{searchQuery}"</h2>
              <p>{items.length} templates found</p>
              <button className="clear-search-btn" onClick={onClearSearch}>
                Clear Search
              </button>
            </div>
          )}

          <div className="placeholders-grid">
            {currentItems.map((item) => (
              <Placeholder
                key={item.id}
                item={item}
                onNextClick={handleNextClick}
              />
            ))}
          </div>

          {items.length === 0 && searchQuery && (
            <div className="no-results">
              <h3>No templates found</h3>
              <p>Try adjusting your search terms or browse all templates.</p>
              <button className="clear-search-btn" onClick={onClearSearch}>
                Show All Templates
              </button>
            </div>
          )}

          {items.length > 0 && (
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
          )}
        </>
      )}

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