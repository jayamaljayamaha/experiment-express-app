import Joi from 'joi';
import { ImageData } from '../../../dto/request/ImageData';
import { ImageRequest } from '../../../dto/request/ImageRequest';

export const ImageRequestDataSchema = Joi.object<ImageData>({
    name: Joi.string().required(),
    width: Joi.number().required(),
    height: Joi.number().required(),
    number_of_pixels: Joi.number().required(),
    format: Joi.string().required(),
    url: Joi.string().required(),
    created_date: Joi.date().required(),
    last_modified_date: Joi.date().required(),
    size: Joi.number().required(),
    captured_by: Joi.string().required(),
    device: Joi.string().valid("DSLR", "PHONE", "DIGITAL_CAMERA", "GO_PRO").required()
})

export const ImageRequesSchema = Joi.object<ImageRequest>({
    images: Joi.array<ImageData[]>().required()
})

