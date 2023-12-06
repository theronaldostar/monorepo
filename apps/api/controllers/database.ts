import * as mysql from "mysql";

const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const useDB = mysql.createConnection({ host, database, user, password });

export default useDB;
export { mysql, host, database, user, password, useDB };
