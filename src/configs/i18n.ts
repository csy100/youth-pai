import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import header from '@/configs/header'
import sider from '@/configs/sider'
import authLogin from '@/configs/auth/login'
import authRegister from '@/configs/auth/register'

const resources = {
  en: {
    translation: {
      ...header.en,
      ...sider.en,
      ...authLogin.en,
      ...authRegister.en,
    }
  },
  zh: {
    translation: {
      ...header.zh,
      ...sider.zh,
      ...authLogin.zh,
      ...authRegister.zh,
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    interpolation: { escapeValue: false }
  })

export default i18n 