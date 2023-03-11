
/**
 * @openapi
 * components:
 *      schemas:
 *          ImageRequestData:
 *              type: object
 *              required:
 *                  - name
 *                  - width
 *                  - height
 *                  - numberOfPixels
 *                  - format
 *                  - url
 *                  - createdDate
 *                  - lastModifiedDate
 *                  - size
 *                  - capturedBy
 *                  - device
 *              properties:
 *                  name:
 *                      type: string
 *                      default: cute dog
 *                  width:
 *                      type: number
 *                      default: 120
 *                  height:
 *                      type: number
 *                      default: 120
 *                  number_of_pixels:
 *                      type: number
 *                      default: 14400
 *                  format:
 *                      type: string
 *                      default: jpg
 *                  url:
 *                      type: string
 *                      default: https://images.examples.com/cute_dog_123
 *                  created_date:
 *                      type: date
 *                      default: 2017-07-21T17:32:28Z
 *                  last_modified_date:
 *                      type: date
 *                      default: 2018-07-21T17:32:28Z
 *                  size:
 *                      type: number
 *                      default: 1320000
 *                  captured_by:
 *                      type: string
 *                      default: sandun
 *                  device:
 *                      type: string
 *                      default: DSLR
 */
export class ImageData {
    name: string
    width: number
    height: number
    number_of_pixels: number
    format: string
    url: string
    created_date: Date
    last_modified_date: Date
    size: number
    captured_by: string
    device: string
}
