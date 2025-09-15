import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import { renderStars } from '../../utils/helpers';
import { BANNER_AUTO_SLIDE_INTERVAL } from '../../constants/themes';

const Banner = ({ onItemClick }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock banner data - replace with actual data
  const banners = [
    {
      id: 1,
      img: 'https://via.placeholder.com/400x250?text=Featured+Item+1',
      fileName: 'Featured App 1',
      fileType: 'Application',
      rating: 4.8,
      uploadingData: 'Featured Today',
      shortDescription: 'This is our featured application of the day with amazing features.'
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/400x250?text=Featured+Item+2',
      fileName: 'Premium Tool 2',
      fileType: 'Tool',
      rating: 4.9,
      uploadingData: 'Trending Now',
      shortDescription: 'Experience the power of our premium tool with advanced capabilities.'
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/400x250?text=Featured+Item+3',
      fileName: 'Creative Suite 3',
      fileType: 'Suite',
      rating: 4.7,
      uploadingData: 'Most Popular',
      shortDescription: 'Unleash your creativity with our comprehensive suite of tools.'
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/400x250?text=Featured+Item+4',
      fileName: 'Productivity App 4',
      fileType: 'Productivity',
      rating: 4.6,
      uploadingData: 'New Release',
      shortDescription: 'Boost your productivity with our latest innovative application.'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
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
    onItemClick(banner);
    navigate('/detail');
  };


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
        {banners.map((_, index) => (
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