import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/BackToTopButton.module.css"

export default function BackToTopButton() {

   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.scrollY);
      };

      handleScroll();

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };

   }, []);

   useEffect(() => {

      const backToTopButton = document.getElementById('backToTopButton')

      if (scrollY > 200) {
         backToTopButton.classList.add(`${styles.showButton}`)
      } else {
         backToTopButton.classList.remove(`${styles.showButton}`)
      }
   })

   return (

      <Link href='#home'>
         <svg id="backToTopButton" className={styles.BackToTopButton} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#00856F" />
            <path d="M20 27V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 20L20 13L27 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </Link>

   )
}