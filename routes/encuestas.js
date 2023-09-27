import express from 'express'
import {consultarEncuesta, crearEncuesta, editarEncuesta, guardarVoto, eliminar, listar  } from '../controllers/encuestaController.js'

const router = express.Router();
//GUARDAR
router.post("/",crearEncuesta);
router.post("/edit",editarEncuesta);
router.get("/:id",consultarEncuesta);
router.get("/",listar);
router.delete("/",eliminar);
router.post("/votar",guardarVoto);

export default router;