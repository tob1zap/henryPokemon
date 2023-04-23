const { Router } = require("express");
const typesRouter = Router();
const { findAllTypes } = require("../handlers/typesHandler");

typesRouter.get("/", findAllTypes);

module.exports = typesRouter;
