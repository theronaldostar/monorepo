import * as express from "express";
import { address } from "ip";
import "dotenv/config";

import GET_PUT from "./default";
import DELETE from "./DELETE";
import GET from "./GET";
import PATCH from "./PATCH";
import POST from "./POST";
import PUT from "./PUT";

const app = express();

const port = 8001;
const message = `[servidor] Iniciado em: http://localhost:${port} ou http://${address()}:${port}`;

app.use((_, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, PUT");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(GET_PUT);
app.use(DELETE);
app.use(GET);
app.use(PATCH);
app.use(POST);
app.use(PUT);

app.listen(port, () => console.log(message));
