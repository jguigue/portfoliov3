// components/SEO.jsx
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

const SEO = ({ page = 'default' }) => {
  const { t } = useTranslation('common');
  
  return (
    <Head>
      <title>{t(`seo.${page}.title`)}</title>
      <meta name="description" content={t(`seo.${page}.description`)} />
      <meta property="og:title" content={t(`seo.${page}.title`)} />
      <meta property="og:description" content={t(`seo.${page}.description`)} />
    </Head>
  );
};

export default SEO;