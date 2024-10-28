const express = require("express");
const globlalConstants = require('./constants/globlal.constants')
const routerConfig = require('./routes/index.routes');

const {connectDBMongoose} = require('./config/database')

const configuration = (app)=>{    
    app.use(express.json());
    return;
}

const configurationRouter = (app)=>{    
    app.use('/api',routerConfig.routesInit());
    return;
}

const init =() =>{
    const app = express();
    configuration(app);
    configurationRouter(app);
    connectDBMongoose();

    app.listen(globlalConstants.PORT);

    console.log(`🚀 app listening on port ${globlalConstants.PORT}`);
}

init()