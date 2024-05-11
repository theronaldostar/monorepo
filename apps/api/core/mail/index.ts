import { createTransport } from "nodemailer";

const transporter = createTransport({
	host: "",
	port: 587,
	secure: false,
	auth: {
		user: "",
		pass: "",
	},
});

export { transporter };
