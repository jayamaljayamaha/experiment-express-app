import Joi from "joi"

 export class InvalidImage {

    name: string
    url: string
    errors: Joi.ValidationErrorItem[] | any
 }