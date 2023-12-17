import { Router, type Response } from "express";

const route = Router();

route.all("/", (_, res: Response) => {
	const message = "This is the main route; if you want to make a request or modification, you must call the route correctly.";

	res.status(200).json({
		status: true,
		message,
		methods: {
			DELETE: {},
			GET: {},
			PATCH: {},
			POST: {},
			PUT: {},
		},
	});
});

export default route;
