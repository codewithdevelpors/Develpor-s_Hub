import { Router } from 'express';
import { fetchData } from '../controllers/post.controller.js';
const router = Router();

router.get('/fetchdata/:id', fetchData)

export default router;