# Develpor's Hub - Backend API Server

A professional Node.js/Express API server for Develpor's Hub application.

## Features

- 🚀 Express.js framework
- 🔒 Security middleware (Helmet, CORS, Rate Limiting)
- 📊 Request logging with Morgan
- 🗄️ MongoDB integration with Mongoose
- 📝 File upload support with Multer
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

### Posts API
- `GET /api/v1/posts` - Get all posts
- `POST /api/v1/posts` - Create a new post
- `GET /api/v1/posts/:id` - Get post by ID
- `PUT /api/v1/posts/:id` - Update post
- `DELETE /api/v1/posts/:id` - Delete post

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