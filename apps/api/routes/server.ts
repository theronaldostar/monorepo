import express from "express";
import { address } from "ip";
import { env } from "process";

import methods from "@app/api/routes";
import DELETE from "@app/api/routes/DELETE";
import GET from "@app/api/routes/GET";
import PATCH from "@app/api/routes/PATCH";
import POST from "@app/api/routes/POST";
import PUT from "@app/api/routes/PUT";

const $ = express();

const port = env.SERVER_PORT;
const message = `[server] Started on: http://localhost:${port}/ ou http://${address()}:${port}/`;

$.use((_, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "OPTIONS, HEAD, DELETE, GET, PATCH, POST, PUT");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});

$.use(express.json());
$.use(express.urlencoded({ extended: true }));

$.use(methods);
$.use(DELETE);
$.use(GET);
$.use(PATCH);
$.use(POST);
$.use(PUT);

$.listen(port, () => console.info(message));
