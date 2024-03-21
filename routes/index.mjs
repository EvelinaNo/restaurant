import express from 'express';

import usersRouter from './users.mjs';
import menus from './menus.mjs';

const router = express.Router();

router.use('/users', usersRouter)
router.use('/menus', menus)

export default router;