const express = require("express");
const router = express.Router();

const tareasController = require("../controllers/tareasController");

router.get("/:id", tareasController.obtenerTareaPorId);

module.exports = router;