/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import { DEFAULT_LOCALE } from '../app/containers/App/constants';

import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';
import zhLocaleData from 'react-intl/locale-data/zh';

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);
addLocaleData(zhLocaleData);

export const appLocales = [
  'en',
  'de',
  'zh',
];

import enTranslationMessages from './translations/en.json';
import deTranslationMessages from './translations/de.json';
import zhTranslationMessages from './translations/zh.json';

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
  const formattedMessages = {};
  const messageKeys = Object.keys(messages);
  for (const messageKey of messageKeys) {
    if (locale === DEFAULT_LOCALE) {
      formattedMessages[messageKey] = messages[messageKey];
    } else {
      formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey];
    }
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages),
  zh: formatTranslationMessages('zh', zhTranslationMessages),
};
