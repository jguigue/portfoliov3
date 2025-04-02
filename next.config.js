/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeDetection: true,
  }
}

module.exports = nextConfig