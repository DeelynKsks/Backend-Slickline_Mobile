import { JobModel } from './entity/data.entity.js';
import { WellModel } from '../wells/entity/wells.entity.js';
// import { UserModel } from './../users/entity/user.js'; // Importa el modelo de usuario

// Función para crear un trabajo
// export async function createJob (jobData) {
//   try {
//     // Buscar el usuario por nombre y reemplazarlo con su ObjectId
//     const user = await UserModel.findOne({ username: jobData.createdBy });
//     jobData.createdBy = user._id;

//     const newJob = new JobModel(jobData);
//     const savedJob = await newJob.save();
//     return savedJob;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// Función para crear una operación y vincularla a un pozo
export async function createJobAndLinkToWell (jobData, wellName) {
  try {
    // Crear una nueva operación
    const newJob = new JobModel(jobData);
    const savedJob = await newJob.save();

    // Buscar el pozo por nombre
    const well = await WellModel.findOne({ name: wellName });

    // Añadir la referencia a la nueva operación al pozo
    well.jobs.push(savedJob._id);

    // Guardar el pozo actualizado
    await well.save();

    return savedJob;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Función para obtener todos los trabajos
export async function getJobs () {
  try {
    const jobs = await JobModel.find();
    return jobs;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Función para obtener un trabajo por su id
export async function getJobById (jobId) {
  try {
    const job = await JobModel.findById(jobId);
    return job;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Función para actualizar un trabajo por su id
export async function updateJobById (jobId, jobData) {
  try {
    const updatedJob = await JobModel.findByIdAndUpdate(jobId, jobData, { new: true });
    return updatedJob;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Función para eliminar un trabajo por su id
export async function deleteJobById (jobId) {
  try {
    const deletedJob = await JobModel.findByIdAndDelete(jobId);
    return deletedJob;
  } catch (error) {
    throw new Error(error.message);
  }
}
