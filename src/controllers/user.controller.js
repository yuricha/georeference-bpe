const { getAllUsers, createUser, getUserById } = require('../services/users/user.service');
const { successResponse, errorResponse } = require('../helpers/response.helper');

// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        successResponse(res, users);
    } catch (error) {
        errorResponse(res, error);
    }
};

// Crear un nuevo usuario
const addUser = async (req, res) => {
    try {
        console.log('body request: '+req.body);
        
        const user = await createUser(req.body);
        successResponse(res, user, 201);
    } catch (error) {
        errorResponse(res, error);
    }
};

module.exports = {
    getUsers,
    addUser,
};