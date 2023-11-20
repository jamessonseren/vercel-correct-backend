import { Router } from "express";
import { correctAdminRouter } from "./correct-admin.routes";

const router = Router()

router.use(correctAdminRouter)

export { router }