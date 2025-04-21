import { useState } from "react"
import { Container, Menu ,ArrowUpFromLine  } from "lucide-react"

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div>
      <div className="flex md:flex-row  justify-between border-b-4 border-b-slate-400 pb-3">
      <a href="#" className="flex font-bold items-center text-center  text-[2rem] md:text-[1.4rem] gap-2"> <Container /> PENKUS<span className="text-accent">DEV
      </span>
      </a>
      <ul className="hidden md:flex space-x-4  ">
        <li><a href="#about" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]">acceuil</a></li>
        <li><a href="#About" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]">capacites</a></li>
        <li><a href="#projets" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]"> mes projets</a></li>
        <li><a href="#experiences" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]">expériences</a></li>
      </ul>
     

      {/*mobile nav*/}
      <ul className={`md:hidden transition-all duration-700 rounded-3xl ${showNav ? 'fixed ' : 'hidden'} w-[80vw] bg-slate-400 z-10 text-black pb-4 flex justify-center md:justify-between flex-col space-y-4  text-center `}>
        <li><a href="#about" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]">acceuil</a></li>
        <li><a href="#About" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]">capacites</a></li>
        <li><a href="#projets" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]"> mes projets</a></li>
        <li><a href="#experiences" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]">expériences</a></li>
        <ArrowUpFromLine className="absoulute right-3 md:hidden m-8  scale-150" onClick={() => setShowNav(false)} />
      </ul>
      <Menu  className=" right-3 float-right md:hidden scale-150" onClick={() => setShowNav(true)}/>
    </div>
  </div>
  )
}

export default Navbar
