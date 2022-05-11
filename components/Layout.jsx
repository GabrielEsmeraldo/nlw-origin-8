import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
   return (
      <>
         <Navbar></Navbar>
         <main>{children}</main>
         <Footer></Footer>
      </>
   )
}