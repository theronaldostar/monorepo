import type { Response } from "express";

import { useDB } from "@app/api/controllers";

type QueryProps = {
	query: {
		id: number;
	};
};

const user = ({ query }: QueryProps, res: Response) => {
	const { id } = query;

	const select = "SELECT * FROM `users` u1 WHERE (u1.id = ?);";

	useDB.query(select, [id], (error, result) => {
		if (error) {
			// eslint-disable-next-line
			console.error("[server]: An error occurred during the connection to the database..");
			return res.status(400).json({ status: false, ...error });
		}

		const data = result[0];

		res.status(202).json({ status: true, ...data });
	});
};

export default user;
