import express, { Request, Response } from 'express';
import validator from '../middlewares/RequestValidationMiddleware';
import { insertNewImage } from '../service/ImageService';
const router = express.Router();

/**
 * @openapi
 * '/express/image':
 *      post:
 *          tags:
 *              - Images
 *          summary: Post a new Image
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ImageRequest'
 *          responses:
 *              '201':
 *                  description: Created
 */
router.post("/", validator, async (req: Request, res: Response) => {
    var images = await Promise.all(insertNewImage(req.body))
    res.status(201).send(images)
})

router.get("/", (req: Request, res: Response) => {
    res.status(201).send("OK")
})

export default router;