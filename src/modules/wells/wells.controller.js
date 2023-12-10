import { Router } from 'express';
import { getWells } from './wells.service.js';

const wellRouter = Router();

wellRouter.get('/', async (req, res) => {
  try {
    const wells = await getWells();
    res.status(200).json(wells);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { wellRouter };
