import { createTransport } from "nodemailer";
import { env } from "process";

type MailerState = {
	to: (string | { address: string; name: string })[];
	subject?: string;
};

const mailer = () => {
	const state: MailerState = { subject: "", to: [] };

	const setAddress = (address: string, name?: string) => {
		const { to } = state;
		const exists = to.some(item => (typeof item === "string" ? item === address : item.address === address));
		if (!exists) to.push(name ? { address, name } : address);
	};

	const send = async () => {
		if (state.to?.length <= 0 || !state.subject) {
			return Promise.reject({ message: "Recipient and subject must be set before sending!" });
		}

		const transport = createTransport({
			host: env.SMTP_HOST,
			port: Number(env.SMTP_PORT),
			secure: eval(env.SMTP_SECURE!),
			auth: {
				user: env.SMTP_USER,
				pass: env.SMTP_PASSWORD,
			},
		});

		return await transport.sendMail({
			from: { name: "Monorepo", address: env.SMTP_USER! },
			to: state.to,
			cc: env.SMTP_CC,
			subject: state.subject,
			html: "<label>Hello Monorepo!</label>",
		});
	};

	return { setAddress, send };
};

export { mailer };
