import style from '../styles/Card.module.css'

export default function Card(props) {
   return (
      <div className={style.card}>
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
            <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="#00856F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         </svg>

         <h3>{props.title}</h3>
         <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
      </div>
   )
}