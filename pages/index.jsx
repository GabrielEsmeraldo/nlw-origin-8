import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import Button from '../components/Button';
import Card from '../components/Card';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {

   return (
      <>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Navbar></Navbar>

         <header id='home' className={styles.header}>
            <div className={styles.header_content}>
               <div className={styles.info}>
                  <Header
                     subtitle='BOAS-VINDAS A DOCTORCARE 👋'
                     title='Assistência médica simplificada para todos'>
                  </Header>

                  <p>Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>

                  <Button />
               </div>

               <div className={styles.image_container}>
                  <Image className={styles.model} src="/images/model.png" width={263} height={342.53} quality={100} alt='imagem de uma mulher negra de moletom verde sorrindo'></Image>
               </div>
            </div>

            <Statistics />
         </header>

         <section id='servicos' className={styles.services}>
            <Header
               subtitle='serviços'
               title='Como podemos ajudá-lo a se sentir melhor?'>
            </Header>

            <div className={styles.card_container}>
               <Card title="Problemas digestivos" />
               <Card title="Saúde Hormonal" />
               <Card title="Bem-estar mental" />
               <Card title="Cuidados Pediátricos" />
               <Card title="Autoimune e Inflamação" />
               <Card title="Saúde do Coração" />
            </div>
         </section>

         <section id='sobre' className={styles.about}>
            <div className={styles.container}>
               <div className={styles.about_content}>
                  <Header
                     subtitle='Sobre nós'
                     title='Entenda quem somos e por que existimos'>
                  </Header>

                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
               </div>

               <Image src="/images/doctor.png" width={480} height={414} quality={100} priority alt='imagem de um doutor'>
               </Image>
            </div>

         </section>

         <section className={styles.contact}>
            <div className={styles.container}>
               <div className={styles.contact_content}>
                  <h2>Entre em contato<br /> com a gente!</h2>
                  <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg><p>R. Amauri Souza, 346</p>
                  </div>
                  <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M22 6L12 13L2 6" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg><p>contato@beautysalon.com</p>
                  </div>

                  <Button />
               </div>


               <Image src="/images/pessoaNoCelular.png" width={575} height={379} alt='imagem de uma pessoa usando o celular e sorrindo'></Image>
            </div>
         </section>


         <Footer></Footer>
      </>
   )
}
