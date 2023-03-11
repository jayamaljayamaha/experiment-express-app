import swaggerJSDoc from "swagger-jsdoc";
const {resolve} = require('path');

const rootPath = resolve('');
console.log(rootPath)
const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Doc for Express Image API",
            version: "1.0.0"
        }
    },
    apis: [ `${rootPath}/build/routes/ImageRouter.js`, 
            `${rootPath}/build/dto/request/*.js`
            ]
}

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;