import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import PostRoute from './routes/post.route.js';
import connectWithMongoDB from './db/Connection1.js';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';

// Environment variables
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Connect to MongoDB
connectWithMongoDB();

// Security middleware
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: {
        error: true,
        message: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api/', limiter);

// CORS
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ["http://localhost:3000"],
    credentials: true
}));

// Logging
if (NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/v1', PostRoute);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: NODE_ENV
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Develpor\'s Hub API Server',
        version: '1.0.0',
        status: 'active',
        environment: NODE_ENV
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: true,
        message: 'Route not found'
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        error: true,
        message: NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} in ${NODE_ENV} mode`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
    });
});

/*
Imagine you're filling out a form on a website, like when you're signing up for
something.This form might ask for your name and age.
When you click the "Submit" button, your web browser needs to send this information
to the server.One way it can do this is by using something called "URL encoding."
Here's what URL-encoded data looks like:

name=John+Doe&age=30

It's like a long string where each piece of information is connected with "&",
and spaces are replaced with "+".
Now, when this data reaches the server, the server needs to understand it.
That's where express.urlencoded() comes in.
express.urlencoded({ extended: true }) is like a translator for the server.
It takes this long string and turns it into something the server can easily use,
like this:
    {
        name: "John Doe",
        age: "30"
    }

Now the server can easily read your name and age!
The {extended: true} part allows this translator to handle more complex data,

like if you were sending a list of your favorite colors:
URL-encoded: favorites=red&favorites=blue&favorites=green
Translated:
{
    favorites: ["red", "blue", "green"]
}

Without this "translator"(middleware), when your server tries to read req.body,
it would just see the original string, which isn't very useful.

*/