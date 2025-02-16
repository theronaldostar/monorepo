import { renderToString } from "react-dom/server";

import type { Address } from "@app/api/core";
import { style } from "@app/api/core/smtp/html/style";

type JSXStringProps = {
	to: Address;
};

const JSXToString = ({ to }: JSXStringProps) => {
	const toList = to.map(item => (typeof item === "string" ? item : item.address)).join(", ");

	return renderToString(
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Monorepo - Email!</title>
				<style type="text/css">{style}</style>
			</head>
			<body className="layout px-8 py-4">
				<label>
					To: <label>{toList}</label>
				</label>
			</body>
		</html>,
	);
};

export { JSXToString };
