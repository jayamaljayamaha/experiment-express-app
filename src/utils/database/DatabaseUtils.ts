import { DataSource  } from "typeorm";
import { Image } from "../../schema/Image";

export const postgresDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST_URL || "localhost",
    port: 5432,
    username: process.env.POSTGRES_USERNAME || "postgres",
    password: process.env.POSTGRES_PASSWORD || "abcd1234",
    database: "postgres",
    schema: "image_app_express",
    entities: [Image],
    logging: false,
    synchronize: true,
})