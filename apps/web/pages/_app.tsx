import type { AppProps } from "next/app";

import "raf/polyfill";
import "setimmediate";

import { SafeProvider } from "interface/layout";
import Head from "next/head";
import React from "react";

import "@library/tailwindcss/config.css";

const App = ({ Component, pageProps }: AppProps) => (
	<div className="flex h-full w-full font-sans">
		<Head>
			<title>Monorepo · Example App</title>
			<meta charSet="UTF-8" />
			<meta name="description" content="Expo + Next.js with Solito. By Fernando Rojo." />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<SafeProvider>
			<Component {...pageProps} />
		</SafeProvider>
	</div>
);

export default App;
