import { useState, useEffect } from "react"
import { Container, Menu ,ArrowUpFromLine  } from "lucide-react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Accueil", href: "#about" },
    { name: "Compétences", href: "#About" },
    { name: "Services", href: "#services" },
    { name: "Mes Projets", href: "#projets" },
    { name: "Expériences", href: "#experiences" },
  ]

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/70 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}
    >
      <div className="flex md:flex-row justify-between items-center px-[4vw] md:px-[10vw]">
        <a href="#" className="flex font-bold items-center text-center text-[2rem] md:text-[1.4rem] gap-2"> 
          <Container className="text-accent" /> 
          <span>PENKUS<span className="text-accent">DEV</span></span>
        </a>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={link.href} className="text-[1rem] lg:text-[1.1rem] font-medium hover:text-accent transition-colors duration-300">
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Nav Button */}
        <Menu className="float-right right-5 md:hidden scale-150 cursor-pointer" onClick={() => setShowNav(true)}/>

        {/* Mobile Nav Menu */}
        <div className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center transition-transform duration-500 ${showNav ? 'translate-x-0' : 'translate-x-full'}`}>
          <ArrowUpFromLine className="absolute top-8 right-8 scale-150 cursor-pointer text-white hover:text-accent" onClick={() => setShowNav(false)} />
          <ul className="flex flex-col space-y-8 text-center">
            {navLinks.map((link, index) => (
              <li key={index} onClick={() => setShowNav(false)}>
                <a href={link.href} className="text-[2rem] font-bold hover:text-accent transition-colors duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
