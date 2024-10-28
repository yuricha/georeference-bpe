const successResponse = (res, data, statusCode = 200) => {
    return res.status(statusCode).json({
        status: 'success',
        data
    });
};

const errorResponse = (res, error, statusCode = 500) => {
    return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'An error occurred',
    });
};

module.exports = {
    successResponse,
    errorResponse,
};