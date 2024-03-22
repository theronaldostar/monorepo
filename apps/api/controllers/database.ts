import * as mysql from "mysql2";

const host = process.env.HOST;
const database = process.env.DATABASE;
const user = process.env.USER;
const password = process.env.PASSWORD;

const useDB = mysql.createConnection({ host, database, user, password });

export default useDB;
export { mysql, host, database, user, password, useDB };
