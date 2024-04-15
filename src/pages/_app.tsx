import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import type { AppProps } from "next/app";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Fragment } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { useVariantColorResolver } from "@/hooks/useVariantColorResolver";
import { Provider } from "react-redux";
import { setupStore } from "@/store/store";
import Modals from "@/modals";
import { Notifications } from "@mantine/notifications";

const variantColorResolver = useVariantColorResolver;
const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </Head>
      <Provider store={store}>
        <MantineProvider
          defaultColorScheme="dark"
          theme={{ variantColorResolver }}
        >
          <Notifications />
          <Layout>
            <Modals />
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </Provider>
    </Fragment>
  );
}
