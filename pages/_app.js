import "/styles/styles.css";
import "/styles/globals.css";

import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import Layout from "../components/Layout";

import { ThemeProvider } from "@material-tailwind/react";

export default function MyApp({ Component, pageProps }) {
  return (

    <>
      <Head>

      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>

  );
}