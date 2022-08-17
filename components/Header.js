import styles from './Header.module.css'

export default function Header({ title }) {
  return <h1 className={styles.h1}>{title}</h1>
}
