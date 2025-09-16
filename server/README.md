# Develpor's Hub - Backend API Server

A professional Node.js/Express API server for Develpor's Hub application, providing RESTful APIs for managing placeholders with advanced filtering and pagination.

## Features

- 🚀 Express.js framework
- 🔒 Security middleware (Helmet, CORS, Rate Limiting)
- 📊 Request logging with Morgan
- 🗄️ MongoDB integration with Mongoose
- 📄 Advanced pagination support
- 🔍 Flexible filtering by category and file type
- 🔧 Environment-based configuration
- 🏥 Health check endpoint
- ⚡ Graceful shutdown handling

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- MongoDB
- npm >= 9.0.0

### Installation

1. Clone the repository
2. Navigate to the server directory
3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

5. Update the `.env` file with your configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 8000 |
| `NODE_ENV` | Environment (development/production) | development |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/develpor_hub |
| `ALLOWED_ORIGINS` | Comma-separated CORS origins | http://localhost:3000 |

### Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on the configured port (default: 8000).

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Root
- `GET /` - API information

### Placeholders API
All endpoints support pagination with query parameters `page` (default: 1) and `limit` (default: 10).

- `GET /api/v1/placeholders` - Get all placeholders with pagination
  - Query parameters: `?page=1&limit=10`
  - Response includes pagination metadata

- `GET /api/v1/placeholders/:id` - Get placeholder by ID

- `GET /api/v1/placeholders/category/:category` - Get placeholders by category with pagination
  - Query parameters: `?page=1&limit=10`

- `GET /api/v1/placeholders/filetype/:filetype` - Get placeholders by file type with pagination
  - Query parameters: `?page=1&limit=10`

### Page-Specific Endpoints

These endpoints are optimized for specific page requirements:

- `GET /api/v1/home` - Get data for home page (recent placeholders)
  - Query parameters: `?limit=12` (default: 12)
  - Returns: Basic placeholder info for homepage display

- `GET /api/v1/detail/:id` - Get detailed data for detail page
  - Returns: Complete placeholder information including timestamps

- `GET /api/v1/preview/:id` - Get preview data for preview page
  - Returns: Preview-focused fields (name, category, type, preview links)

- `GET /api/v1/download/:id` - Get download data for download page
  - Returns: Download-focused fields (name, download link, related images)

### Placeholder Data Model

Each placeholder contains the following fields:

- `name` (String, required) - Display name of the placeholder
- `category` (String, required) - Category classification
- `type` (String, required) - File type (e.g., "image", "video", "document")
- `description` (String, required) - Detailed description
- `shortDescription` (String, required) - Brief description
- `previewLink` (String, required) - Link to preview
- `outputImgLink` (String, required) - Link to output image
- `imgLink` (String, required) - Link to main image
- `downloadLink` (String, required) - Download link
- `createdAt` (Date) - Creation timestamp
- `updatedAt` (Date) - Last update timestamp

### Example API Responses

#### Get All Placeholders
```json
{
  "success": true,
  "message": "Placeholders retrieved successfully",
  "data": [
    {
      "name": "Sample Placeholder",
      "category": "templates",
      "type": "image",
      "description": "A sample placeholder description",
      "shortDescription": "Sample placeholder",
      "previewLink": "https://example.com/preview.jpg",
      "outputImgLink": "https://example.com/output.jpg",
      "imgLink": "https://example.com/image.jpg",
      "downloadLink": "https://example.com/download.zip"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50,
    "itemsPerPage": 10
  }
}
```

#### Get Placeholder by ID
```json
{
  "success": true,
  "message": "Placeholder retrieved successfully",
  "data": {
    "name": "Sample Placeholder",
    "category": "templates",
    "type": "image",
    "description": "A sample placeholder description",
    "shortDescription": "Sample placeholder",
    "previewLink": "https://example.com/preview.jpg",
    "outputImgLink": "https://example.com/output.jpg",
    "imgLink": "https://example.com/image.jpg",
    "downloadLink": "https://example.com/download.zip"
  }
}
```

## Project Structure

```
server/
├── controllers/          # Route controllers
├── db/                   # Database connection
├── models/              # Mongoose models
├── routes/              # API routes
├── .env.example         # Environment variables template
├── package.json         # Dependencies and scripts
├── README.md           # This file
└── server.js           # Main server file
```

## Security

- Helmet for security headers
- Rate limiting to prevent abuse
- CORS configuration
- Input validation and sanitization

## Development

- Uses ES6 modules
- Morgan for request logging
- Nodemon for development auto-restart
- Structured error handling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Author

**Develpor**
- Website: [develpor.com](https://develpor.com)
- GitHub: [@develpor](https://github.com/develpor)