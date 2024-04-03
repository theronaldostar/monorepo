import { env } from "process";
import mysql from "mysql2";

const host = env.HOST;
const database = env.DATABASE;
const user = env.USER;
const password = env.PASSWORD;

const db = mysql.createConnection({ host, database, user, password, multipleStatements: true });

export { mysql, host, database, user, password, db };
