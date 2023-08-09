const express = require('express');

const TributeController = require('../controllers/tributeController');

let tributesRouter = express.Router();

tributesRouter
    .route('/')
    .get(TributeController.getTributes);

module.exports = tributesRouter;
