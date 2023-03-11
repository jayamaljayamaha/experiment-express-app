import {ImageRequestDataSchema, ImageRequesSchema} from '../schemas/ImageRequestSchema'
import Joi from 'joi'
import { ImageRequest } from '../../../dto/request/ImageRequest';
import { ImageData } from '../../../dto/request/ImageData';

export const validateImages = (imageData: ImageRequest): Joi.ValidationResult<ImageRequest> => {
    return ImageRequesSchema.validate(imageData);
}

export const validateImageData = (imageRequestData: ImageData): Joi.ValidationResult<ImageData> => {
    return ImageRequestDataSchema.validate(imageRequestData);
}