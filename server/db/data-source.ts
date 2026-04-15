import 'reflect-metadata'
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import {Friend} from "./entities/Friend"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '192.168.55.65',
    port: 3309,
    username: 'student',
    password: 'student',
    database: 'sde_sase_2026',
    entities: [User, Friend]
})