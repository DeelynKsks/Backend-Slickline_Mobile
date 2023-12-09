import { Router } from 'express';
import {
  createJobAndLinkToWell,
  deleteJobById,
  getJobById,
  getJobs,
  updateJobById
} from './data.service.js';

// import { aplyValidation } from '../../middlewares/validations.js';

// Aquí puedes importar tus esquemas de validación para los trabajos

const dataRouter = Router();

dataRouter.get('/', async (req, res) => {
  try {
    const jobs = await getJobs();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

dataRouter.get('/:id', async (req, res) => {
  try {
    const job = await getJobById(req.params.id);
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

dataRouter.post('/create' /* aquí iría tu esquema de validación para crear trabajos, */, async (req, res) => {
  try {
    const job = await createJobAndLinkToWell(req.body, req.body.wellName);
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

dataRouter.patch('/:id' /* aquí iría tu esquema de validación para actualizar trabajos, */, async (req, res) => {
  try {
    const job = await updateJobById(req.params.id, req.body);
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

dataRouter.delete('/:id', async (req, res) => {
  try {
    const job = await deleteJobById(req.params.id);
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { dataRouter };
