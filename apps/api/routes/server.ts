import express from "express";
import { address } from "ip";
import { env } from "process";

import Methods, { Delete, Get, Patch, Post, Put } from "@app/api/routes";

const app = express();

const port = Number(env.SERVER_PORT) || 4000;
const message = `http://localhost:${port}/ ou http://${address()}:${port}/`;

app.use(($, response, next) => {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Methods", "OPTIONS, HEAD, DELETE, GET, PATCH, POST, PUT");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type");
	response.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Methods);
app.use(Delete);
app.use(Get);
app.use(Patch);
app.use(Post);
app.use(Put);

// eslint-disable-next-line no-console
app.listen(port, () => console.info("[server] Started on:", message));
