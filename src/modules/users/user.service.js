import { RoleModel } from '../roles/entity/roles.entity.js';
import { UserModel } from './entity/user.js';

// Función para crear un usuario
export async function createUser (userData) {
  try {
    // Buscar los roles por nombre y reemplazarlos con sus ObjectIds
    const roles = await Promise.all(userData.roles.map(async (roleName) => {
      const role = await RoleModel.findOne({ name: roleName });
      return role._id;
    }));

    // Reemplazar los roles en los datos del usuario con los ObjectIds
    userData.roles = roles;

    const newUser = new UserModel(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Función para obtener todos los usuarios
export async function getUsers () {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Función para obtener un usuario por su id
export async function getUserById (userId) {
  try {
    const user = await UserModel.findById(userId);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Función para actualizar un usuario por su id
export async function updateUserById (userId, userData) {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, { new: true });
    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Función para eliminar un usuario por su id
export async function deleteUserById (userId) {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    throw new Error(error.message);
  }
}
