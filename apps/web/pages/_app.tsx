import type { AppProps } from "next/app";

import "raf/polyfill";
import "setimmediate";

import { SafeProvider } from "interface/layout";
import Head from "next/head";
import React from "react";

import "@library/tailwindcss/config.css";

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>Solito Example App</title>
			<meta name="description" content="Expo + Next.js with Solito. By Fernando Rojo." />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<SafeProvider>
			<Component {...pageProps} />
		</SafeProvider>
	</>
);

export default App;
