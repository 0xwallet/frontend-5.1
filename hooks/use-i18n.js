import { useContext } from 'react'
import { I18nContext } from '../lib/i18n'

export default function useI18n() {
  const i18n = useContext(I18nContext)
  console.log(i18n,'国际初始化东西')
  return i18n
}
