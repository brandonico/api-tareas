const express = require("express");
const router = express.Router();

const tareasController = require("../controllers/tareasController");

router.post("/", tareasController.crearTarea);

module.exports = router;