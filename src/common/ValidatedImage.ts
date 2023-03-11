import Joi from "joi"
import { ImageData } from "../dto/request/ImageData"

export class ValidatedImage {

    isValid: boolean
    image: ImageData
    errors: Joi.ValidationErrorItem[]
}