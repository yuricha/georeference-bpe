require('dotenv').config()


module.exports = {
    PORT : process.env.PORT || 8080,
    MONGOOSE_URI : process.env.MONGOOSE_URI 
};