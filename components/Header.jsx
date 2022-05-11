import styles from '../styles/Header.module.css'

export default function Header(props) {
   return (
      <>
         <h4 className={styles.subtitle}>{props.subtitle}</h4>
         <h1 className={styles.title}>{props.title}</h1>
      </>
   )
}