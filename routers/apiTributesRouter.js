const express = require('express');

const ApiTributesController = require("../controllers/apiTributesController");

let apiTributesRouter = express.Router();

apiTributesRouter
    .route("/tributes")
    .get(ApiTributesController.getTributes);
apiTributesRouter
    .route("/tribute")
    .post(ApiTributesController.postTribute)
    .delete(ApiTributesController.removeTribute)
    .get(ApiTributesController.getTribute);

module.exports = apiTributesRouter;