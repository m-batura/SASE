import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3309,
    username: 'root',
    password: 'root',
    database: 'sde_sase_2026',
})