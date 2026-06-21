import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about"; 
import Services from "./components/services";
import Projets from "./components/mesprojets";
import Experiences from "./components/experiences";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projets />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  )
}