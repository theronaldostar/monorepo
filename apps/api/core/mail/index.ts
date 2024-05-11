import { createTransport } from "nodemailer";
import { env } from "process";

const transporter = createTransport({
	host: env.EMAIL_HOST,
	port: Number(env.EMAIL_PORT),
	secure: Boolean(env.EMAIL_SECURE),
	auth: {
		user: env.EMAIL_USER,
		pass: env.EMAIL_PASSWORD,
	},
});

export { transporter };
