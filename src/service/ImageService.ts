import { Builder } from "builder-pattern"
import { ValidatedImage } from "../common/ValidatedImage";
import { ImageResponse } from "../dto/response/ImageResponse";
import { Image } from "../schema/Image"
import { ValidImage } from "../dto/response/Image"
import { postgresDataSource } from "../utils/database/DatabaseUtils"
import { InvalidImage } from "../dto/response/InvalidImage";
import { ImageData } from "../dto/request/ImageData";

const imageRepository = postgresDataSource.getRepository(Image);

const insertNewImage = (validatedImages : ValidatedImage[]): Array<Promise<ImageResponse>> => {
    return validatedImages.map(async validatedImage => {
        if (validatedImage.isValid) {
            const image = createImageEntity(validatedImage.image)
            return imageRepository.save(image).then(image => Builder(ImageResponse).isSuccess(true).image(
                Builder(ValidImage).id(image.id).name(image.name).url(image.url).build()).build())
                .catch(err => Builder(ImageResponse).isSuccess(false).invalidImage(
                    Builder(InvalidImage).name(validatedImage.image.name)
                    .errors(err).url(validatedImage.image.url).build())
                    .build())   
        } else {
            return new Promise<ImageResponse>((resolve) =>  resolve(Builder(ImageResponse).isSuccess(false).invalidImage(
                Builder(InvalidImage).name(validatedImage.image.name)
                .errors(validatedImage.errors).url(validatedImage.image.url).build())
                .build()))
        }
    })

    
}

const createImageEntity = (image: ImageData): Image => {
    return Builder(Image)
        .name(image.name)
        .width(image.width)
        .height(image.height)
        .numberOfPixels(image.number_of_pixels)
        .format(image.format)
        .url(image.url)
        .createdDate(image.created_date)
        .lastModifiedDate(image.last_modified_date)
        .size(image.size)
        .capturedBy(image.captured_by)
        .device(image.device)
        .build();
}

export {insertNewImage}