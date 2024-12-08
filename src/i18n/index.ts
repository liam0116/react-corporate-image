import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// 使用 ISO 639-1 或 ISO 639-2/B 語言代碼
export const LANGUAGES = [
    { code: 'en', label: 'English' },       // 英文
    { code: 'ms', label: 'Bahasa Melayu' }, // 马来文
    { code: 'zh-TW', label: '繁體中文 (台灣)' }, // 繁体中文（台湾）
    { code: 'zh', label: '简体中文' },      // 简体中文
  ];

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: LANGUAGES.map((lang) => lang.code),
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['global'],
    defaultNS: 'global',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;