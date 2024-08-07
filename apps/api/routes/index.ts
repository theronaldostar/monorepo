import { Router, type Response } from "express";

import Delete from "@app/api/routes/delete";
import Get from "@app/api/routes/get";
import Patch from "@app/api/routes/patch";
import Post from "@app/api/routes/post";
import Put from "@app/api/routes/put";

const route = Router();

export default route.all("/", (_, res: Response) => {
	const message = "This is the main route; if you want to make a request or modification, you must call the route correctly.";

	res.status(404).json({
		status: false,
		message,
	});
});

export { Delete, Get, Patch, Post, Put };
