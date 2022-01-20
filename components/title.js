import useI18n from '../hooks/use-i18n'
// import '../components/title.module.scss';
import '../styles/title.module.scss'
import styles from '../styles/title.module.scss'

export default function Title({ username }) {
  // 语言切换呢
  const i18n = useI18n()
  return (
    <div>
      <h1 className={styles.nav}>test标题111</h1>
      <h2 className='test'>uuu</h2>
      <h1>{i18n.t('intro.welcome', { username })}</h1>
    </div>
  )
}
