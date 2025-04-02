import React from "react";
import Head from "next/head";
import appData from "@data/app.json";
import { useEffect } from "react";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";
import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import "../styles/scss/style-dark.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
register();

const gtmParams = { id: "GTM-TBG5RBNZ" };

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  useEffect(() => {}, []);

 return (
    <GTMProvider state={gtmParams}>
      <Head>
        {/* seo begin */}
        <title>{t('seo.title', appData.settings.siteName[locale || 'fr'])}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:description"
          content={t('seo.description', 'Louis Guigue, chef de projet numérique à Toulon. Explorez mon portfolio pour découvrir mes projets innovants et mon expertise en développement numérique.')}
        />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </GTMProvider>
  );
}

export default appWithTranslation(MyApp);