import "@/styles/globals.css";
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Fragment } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { useVariantColorResolver } from "@/hooks/useVariantColorResolver";
import { Provider } from "react-redux";
import { setupStore } from "@/store/store";

const variantColorResolver = useVariantColorResolver;
const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <ColorSchemeScript />
      </Head>
      <Provider store={store}>
        <MantineProvider
          defaultColorScheme="dark"
          theme={{ variantColorResolver }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </Provider>
    </Fragment>
  );
}
