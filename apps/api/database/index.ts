import type { Response } from "express";
import mysql, { QueryError } from "mysql2";
import { env } from "process";

const host = env.DB_HOST;
const database = env.DB_NAME;
const user = env.DB_USER;
const password = env.DB_PASSWORD;

const config = { host, database, user, password, multipleStatements: true };
const db = mysql.createConnection(config);

const setError = (error: QueryError | null, response: Response) => {
	if (error) {
		// eslint-disable-next-line no-console
		console.error("[server]:", "An error occurred during the connection to the database!");
		return response.status(400).json({ status: false, ...error });
	}
};

export { host, database, user, password, db, setError };
