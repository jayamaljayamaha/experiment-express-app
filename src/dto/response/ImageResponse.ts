import { ValidImage } from "./Image"
import { InvalidImage } from "./InvalidImage"

export class ImageResponse {
    isSuccess: boolean
    image: ValidImage
    invalidImage: InvalidImage
}