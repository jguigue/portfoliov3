import React from "react";
import Head from "next/head";
import appData from "@data/app.json";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

import "../styles/scss/style-dark.scss";
//import '../styles/scss/style-light.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "<GTM-TBG5RBNZ>" });
  }, []);
  return (
    <>
      <Head>
        {/* seo begin */}
        <title>{appData.settings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;