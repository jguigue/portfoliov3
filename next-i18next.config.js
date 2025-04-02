module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  defaultNS: 'common',
  localePath: typeof window === 'undefined' 
    ? require('path').resolve('./public/locales') 
    : '/locales',
}