import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import { renderStars } from '../../utils/helpers';
import { BANNER_AUTO_SLIDE_INTERVAL } from '../../constants/themes';
import { fetchHomePageData } from '../../utils/api';

const Banner = ({ onItemClick }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch banner data from API
  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        setLoading(true);
        const data = await fetchHomePageData(50); // Get all items for banner
        const bannerData = data.map((item, index) => ({
          id: item._id,
          img: item.imgLink,
          fileName: item.name,
          fileType: item.type,
          rating: item.rating || 4.5,
          uploadingData: index === 0 ? 'Featured Today' :
                        index === 1 ? 'Trending Now' :
                        index === 2 ? 'Most Popular' :
                        index === 3 ? 'New Release' :
                        index === 4 ? 'Top Rated' :
                        index === 5 ? 'Hot Pick' :
                        index === 6 ? 'Editor\'s Choice' :
                        index === 7 ? 'Community Favorite' :
                        index === 8 ? 'Rising Star' :
                        index === 9 ? 'Must Try' :
                        index % 3 === 0 ? 'Popular Choice' :
                        index % 3 === 1 ? 'Highly Rated' :
                        'Recommended',
          shortDescription: item.shortDescription,
          _id: item._id
        }));
        setBanners(bannerData);
      } catch (error) {
        console.error('Error fetching banner data:', error);
        // Fallback to empty array
        setBanners([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBannerData();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, BANNER_AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
  };

  const handleBannerClick = (banner) => {
    // Convert banner data to match the expected item format
    const itemData = {
      id: banner.id,
      _id: banner._id,
      name: banner.fileName,
      type: banner.fileType,
      category: 'python', // Default category
      rating: banner.rating,
      shortDescription: banner.shortDescription,
      imgLink: banner.img,
      uploadingData: banner.uploadingData
    };
    onItemClick(itemData);
    navigate('/detail');
  };

  if (loading) {
    return (
      <div className="banner-container">
        <div className="banner-loading">
          <div className="loading-spinner">Loading featured items...</div>
        </div>
      </div>
    );
  }

  if (banners.length === 0) {
    return null; // Don't show banner if no data
  }

  return (
    <div className="banner-container">
      <div className="banner-carousel">
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          ‹
        </button>

        <div className="banner-wrapper">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`banner-slide ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleBannerClick(banner)}
              style={{ cursor: 'pointer' }}
            >
              <div className="banner-image">
                <img src={banner.img} alt={banner.fileName} />
              </div>
              <div className="banner-info">
                <h3 className="banner-title">{banner.fileName}</h3>
                <p className="banner-type">{banner.fileType}</p>
                <div className="banner-rating">
                  {renderStars(banner.rating)}
                  <span className="rating-number">({banner.rating})</span>
                </div>
                <p className="banner-upload">{banner.uploadingData}</p>
                <p className="banner-description">{banner.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn next-btn" onClick={handleNext}>
          ›
        </button>
      </div>

      <div className="banner-indicators">
        {banners.slice(0, 8).map((_, index) => ( // Show max 8 indicators for better UX
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;