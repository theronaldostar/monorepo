import type { Response } from "express";
import { useDB } from "@app/api/controllers";

import { routes } from "@app/api/routes/default";

type QueryProps = {
	query: {
		id: number;
	};
};

routes.get("/users", ({ query }: QueryProps, res: Response) => {
	const { id } = query;

	const select = "SELECT * FROM `users` u1 WHERE (u1.id = ?);";

	useDB.query(select, [id], (error, result) => {
		if (error) {
			console.log("[server]: An error occurred during the connection to the database.");
			return res.status(400).json(error);
		}

		const data = result[0];

		res.status(202).json({ status: true, ...data });
	});
});
