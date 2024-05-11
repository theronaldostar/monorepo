import { env } from "process";
import mysql from "mysql2";

import message from "@app/api/database/message";

const host = env.DB_HOST;
const database = env.DB_NAME;
const user = env.DB_USER;
const password = env.DB_PASSWORD;

const db = mysql.createConnection({ host, database, user, password, multipleStatements: true });

export { message, mysql, host, database, user, password, db };
