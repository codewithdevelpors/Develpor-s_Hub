/**
 * Utility functions for the application
 */

/**
 * Generate star rating display
 * @param {number} rating - The rating value (1-5)
 * @returns {Array} Array of star elements
 */
export const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
        ★
      </span>
    );
  }
  return stars;
};

/**
 * Check if an item is trending based on rating
 * @param {number} rating - The rating value
 * @returns {boolean} Whether the item is trending
 */
export const isTrending = (rating, threshold = 4.5) => {
  return rating >= threshold;
};

/**
 * Format date for display
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Debounce function for search inputs
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Generate mock data for development
 * @param {number} count - Number of items to generate
 * @returns {Array} Array of mock items
 */
export const generateMockItems = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    img: `https://via.placeholder.com/300x200?text=Item+${i + 1}`,
    fileName: `File ${i + 1}.txt`,
    fileType: 'Text File',
    rating: Math.floor(Math.random() * 5) + 1,
    uploadingData: `Uploaded ${Math.floor(Math.random() * 30) + 1} days ago`,
    shortDescription: `This is a short description for item ${i + 1}. It contains some useful information about the file.`
  }));
};