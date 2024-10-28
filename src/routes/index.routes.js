const { Router }= require('express');
const usersRoutes = require('./users.routes');


const routesInit = () =>{

    const router= Router();
    router.use("/users", usersRoutes);

    return router;
}

module.exports=  {routesInit};