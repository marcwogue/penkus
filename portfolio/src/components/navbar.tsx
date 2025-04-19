
import { Container } from "lucide-react"

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center md:justify-between border-b-4 border-b-slate-400 pb-3">
      <a href="#" className="flex font-bold items-center text-[2rem] md:text-[1.4rem] gap-2"> <Container /> PENKUs<span className="text-accent">DEV
      </span>
      </a>
      <ul className="hidden md:flex space-x-4  ">
        <li><a href="#Home" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]">acceuil</a></li>
        <li><a href="#Skills" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]">capacites</a></li>
        <li><a href="#Projects" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]"> mes projets</a></li>
        <li><a href="#Experiences" className="text-[1.4rem] hover:bg-purple-950 p-2 rounded-2xl hover:text-accent duration-[0.5s]">expériences</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
