import express from 'express';
import { registerUser } from '../controllers/authController.js';

const router = express();

router.post('/register', registerUser);

export default router;