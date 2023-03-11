import { Builder } from "builder-pattern";
import { NextFunction, Request, Response } from "express";
import { ValidatedImage } from "../common/ValidatedImage";
import { ImageRequest } from "../dto/request/ImageRequest";
import { validateImageData, validateImages } from "../utils/joi/validations/ImageDataValidator";

const validator = (req: Request, res: Response, next: NextFunction) => {
    const imageRequest: ImageRequest = req.body;
    const { error, value } = validateImages(imageRequest)
    if(error) {
        res.status(400).send(error)
    } else {
        const validatedImages = value.images.map(image => {
            const {error, value} = validateImageData(image);
            if(error) {
                return Builder(ValidatedImage).isValid(false).errors(error.details).image(image).build();
            } 
            return Builder(ValidatedImage).isValid(true).image(value).build()
        })
        req.body=validatedImages
        next()
    }
}

export default validator