import express, { Express, Request, Response } from "express";
import swaggerSpec from "../utils/swagger/Swagger";
const router = express.Router();


router.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json")
    res.send(swaggerSpec)
})

export default router;