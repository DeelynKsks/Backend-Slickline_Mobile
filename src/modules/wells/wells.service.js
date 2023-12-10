import { WellModel } from './entity/wells.entity.js';

// Función para obtener todos los pozos
export async function getWells () {
  try {
    const wells = await WellModel.find();
    return wells;
  } catch (error) {
    throw new Error(error.message);
  }
}
