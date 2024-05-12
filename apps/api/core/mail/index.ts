import { createTransport } from "nodemailer";
import { env } from "process";

const transporter = createTransport({
	host: env.MAIL_HOST,
	port: Number(env.MAIL_PORT),
	secure: Boolean(env.SMTP_SECURE),
	auth: {
		user: env.MAIL_USER,
		pass: env.MAIL_PASSWORD,
	},
});

export { transporter };
