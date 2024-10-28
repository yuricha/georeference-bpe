
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const globalConstants = require('../constants/globlal.constants');

// Conexión DBs
const connectDBMongo = async () => {

const connectionString = process.env.MONGO_URI || "";
const client = new MongoClient(connectionString);

return await client.connect().then(() => console.log("DB connecting..."))
.catch((error) => console.error(error));

};

const connectDBMongoose = ()=>{

    return mongoose.connect(globalConstants.MONGOOSE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));
}

module.exports = { connectDBMongo, connectDBMongoose };