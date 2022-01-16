import useI18n from '../hooks/use-i18n'

export default function Title({ username }) {
  // 语言切换呢
  const i18n = useI18n()
  return (
    <div>
      <h1>test标题</h1>
      <h1>{i18n.t('intro.welcome', { username })}</h1>
    </div>
  )
}
