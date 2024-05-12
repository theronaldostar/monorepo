import { env } from "process";
import type { Response } from "express";
import mysql, { QueryError } from "mysql2";

const host = env.DB_HOST;
const database = env.DB_NAME;
const user = env.DB_USER;
const password = env.DB_PASSWORD;

const db = mysql.createConnection({ host, database, user, password, multipleStatements: true });

const setError = (error: QueryError | null, response: Response) => {
	if (error) {
		// eslint-disable-next-line no-console
		console.error("[server]:", "An error occurred during the connection to the database!");
		response.status(400).json({ status: false, ...error });
	}
};

export { host, database, user, password, db, setError };
