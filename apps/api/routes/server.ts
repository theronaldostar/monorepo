import express from "express";
import { address } from "ip";
import "dotenv/config";

import methods from "@app/api/routes";

import DELETE from "@app/api/routes/DELETE";
import GET from "@app/api/routes/GET";
import PATCH from "@app/api/routes/PATCH";
import POST from "@app/api/routes/POST";
import PUT from "@app/api/routes/PUT";

const app = express();

const port = process.env.SERVER_PORT || 8001;
const message = `[server] Started on: http://localhost:${port}/ ou http://${address()}:${port}/`;

app.use((_, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "OPTIONS, DELETE, GET, PATCH, POST, PUT");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methods);
app.use(DELETE);
app.use(GET);
app.use(PATCH);
app.use(POST);
app.use(PUT);

// eslint-disable-next-line
app.listen(port, () => console.info(message));
