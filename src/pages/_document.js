import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta property="og:site_name" content="Portfolio Louis Guigue" />
          <meta
            property="og:description"
            content="Fraîchement diplômé d'un master en communication ,inovation et management de projets je cherche activement un emploi qui saura me satisfaire dans le multimédia. Découvrez mon portfolio pour en savoir plus."
          />
            <script
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TBG5RBNZ');`,
    }}
  />
          {/* meta end */}

          {/* public assets begin */}
          <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
          <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
          {/* public assets end */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
    dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TBG5RBNZ" height="0" width="0" style="display: none; visibility: hidden;" />`,
    }}
  />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
