import styles from '../styles/Statistics.module.css'

export default function Statistics() {
   return (
      <div className={styles.stats}>
         <div>
            <h3>+3500</h3>
            <p>Pacientes atendidos</p>
         </div>
         <div>
            <h3>+15</h3>
            <p>Especialistas disponíveis</p>
         </div>
         <div>
            <h3>+10</h3>
            <p>Anos no mercado</p>
         </div>
      </div>
   )
}