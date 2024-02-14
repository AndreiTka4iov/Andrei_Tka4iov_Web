import "@/styles/globals.css";
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Fragment } from "react";
import Layout from "../components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <ColorSchemeScript />
      </Head>

      <MantineProvider defaultColorScheme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </Fragment>
  );
}
