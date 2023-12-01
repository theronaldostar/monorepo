import express from "express";
import { address } from "ip";
import "dotenv/config";

import Methods from "./default";

const app = express();

const port = 8001;
const message = `[server] Started on: http://localhost:${port} ou http://${address()}:${port}`;

app.use((_, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "OPTIONS, DELETE, GET, PATCH, POST, PUT");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Methods);

app.listen(port, () => console.info(message));
