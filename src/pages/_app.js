import React from "react";
import Head from "next/head";
import appData from "@data/app.json";
import { useEffect } from "react";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";

import "../styles/scss/style-dark.scss";
//import '../styles/scss/style-light.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
const gtmParams = { id: "GTM-TBG5RBNZ" };

function MyApp({ Component, pageProps }) {
  useEffect(() => {}, []);
  return (
    <GTMProvider state={gtmParams}>
      <Head>
        {/* seo begin */}
        <title>{appData.settings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </GTMProvider>
  );
}

export default MyApp;
