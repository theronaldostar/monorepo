import { Router, type Response } from "express";

const route = Router();

route.all("/", (_, res: Response) => {
	const message = "This is the main route; if you want to make a request or modification, you must call the route correctly.";

	res.status(404).json({
		status: false,
		message,
	});
});

export default route;
