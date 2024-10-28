const User = require('../../models/user');

// Obtener todos los usuarios
const getAllUsers = async () => {
    return await User.find({});
};

// Crear un nuevo usuario
const createUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};

// Obtener usuario por ID
const getUserById = async (id) => {
    return await User.findById(id);
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
};