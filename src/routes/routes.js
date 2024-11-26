import { Router } from "express";
import { getEmpresa } from "../controller/empresaController.js";
import { createEmpresa } from "../controller/createController.js"
import { updateEmpresa } from "../controller/updateController.js";
import { deleteEmpresa } from "../controller/deleteController.js";

const routes = Router()

routes.get("/empresa", getEmpresa)
routes.post("/empresa", createEmpresa)
routes.put("/empresa/:id", updateEmpresa)
routes.delete('/empresa/:id', deleteEmpresa)

export default routes