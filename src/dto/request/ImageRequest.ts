import { ImageData } from "./ImageData";

/**
 * @openapi
 * components:
 *      schemas: 
 *          ImageRequest:
 *              type: object
 *              properties:
 *                  images:
 *                      type: array
 *                      items: 
 *                          $ref: '#/components/schemas/ImageRequestData'
 */
export class ImageRequest {
    images: Array<ImageData>
}