import { Router } from 'express';
import {
    getAllPlaceholders,
    getPlaceholderById,
    getPlaceholdersByCategory,
    getPlaceholdersByFileType,
    getHomePageData,
    getDetailPageData,
    getPreviewPageData,
    getDownloadPageData
} from '../controllers/post.controller.js';

const router = Router();

// General placeholder endpoints
router.get('/placeholders', getAllPlaceholders);
router.get('/placeholders/:id', getPlaceholderById);
router.get('/placeholders/category/:category', getPlaceholdersByCategory);
router.get('/placeholders/filetype/:filetype', getPlaceholdersByFileType);

// Page-specific endpoints
router.get('/home', getHomePageData);
router.get('/detail/:id', getDetailPageData);
router.get('/preview/:id', getPreviewPageData);
router.get('/download/:id', getDownloadPageData);

export default router;