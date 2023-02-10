import express from 'express';
function routerReduced(cb) {

    const router = express.Router();
    cb(router)

    return router;
}

export default routerReduced