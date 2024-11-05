import { Router } from "express";
import {getUser, getUserNombre, postUser, deleteUser} from "../controllers/user.controllers.js";

const router = Router();

router.post("/cuentas/login", )
router.get("/cuentas/usuarios",getUser);
router.get("/cuentas/usuarios/:id",getUserNombre);
router.post("/cuentas/usuarios",postUser);
router.delete("/cuentas/usuarios/:id",deleteUser);

export default router;