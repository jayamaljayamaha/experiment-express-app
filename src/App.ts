import express from "express";
import ImageRouter from './routes/ImageRouter';
import SwaggerRouter from './routes/SwaggerRouter'
import swaggerUi  from "swagger-ui-express";
import swaggerSpec from "./utils/swagger/Swagger";
import { postgresDataSource } from "./utils/database/DatabaseUtils";

const PORT = 3000
const app = express()

app.use(express.json())

app.use('/express/image', ImageRouter)
app.use('/api-docs', SwaggerRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

postgresDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
}).catch((err) => {
    console.error("Error during Data Source initialization", err)
})

app.listen(PORT, () => {
    console.log(`started the server on port ${PORT}`)
})

// "build": "rm -rf build && tsc",