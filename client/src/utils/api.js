/**
 * API service functions for communicating with the backend
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

/**
 * Fetch data by ID from the server
 * @param {string} id - The ID of the data to fetch
 * @returns {Promise<Object>} The fetched data
 */
export const fetchDataById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/placeholders/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'Failed to fetch data');
    }

    return result.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

/**
 * Generic fetch function with error handling
 * @param {string} url - The URL to fetch from
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} The response data
 */
export const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'API request failed');
    }

    return result.data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

/**
 * Fetch home page data
 * @param {number} limit - Number of items to fetch
 * @returns {Promise<Array>} Array of placeholder items
 */
export const fetchHomePageData = async (limit = 12) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/home?limit=${limit}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'Failed to fetch home page data');
    }

    return result.data;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    throw error;
  }
};

/**
 * Fetch all placeholders with pagination
 * @param {number} page - Page number
 * @param {number} limit - Items per page
 * @returns {Promise<Object>} Object with data array and pagination info
 */
export const fetchAllPlaceholders = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/placeholders?page=${page}&limit=${limit}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'Failed to fetch placeholders');
    }

    return result;
  } catch (error) {
    console.error('Error fetching placeholders:', error);
    throw error;
  }
};

/**
 * Fetch placeholders by category
 * @param {string} category - Category name
 * @param {number} page - Page number
 * @param {number} limit - Items per page
 * @returns {Promise<Object>} Object with data array and pagination info
 */
export const fetchPlaceholdersByCategory = async (category, page = 1, limit = 10) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/placeholders/category/${category}?page=${page}&limit=${limit}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'Failed to fetch placeholders by category');
    }

    return result;
  } catch (error) {
    console.error('Error fetching placeholders by category:', error);
    throw error;
  }
};