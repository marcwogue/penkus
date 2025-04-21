
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about"; 
import Projets from "./components/mesprojets";
import Experiences from "./components/experiences";
import Contact from "./components/contact";
import Footer from "./components/footer";


export default function App() {
  return (
    <>
      <div className="my-[1vw] mx-[4vw]"> 
        <Navbar />
        <Home />
        <About />
        <Projets />
        <Experiences />
        <Contact />
        <Footer />
      </div>
      
    </>
  )
}