import { Mail } from "lucide-react"
import img from '../assets/WhatsApp Image 2025-04-14 at 05.31.37.jpeg'

const Home = () => {
  return (
    <div id="about">
      <div className=" my-10 md:my-32 place-content-center flex flex-col-reverse md:flex-row">
       <div>
        <h2 className="text-[3rem] md:text-[4rem] font-bold">
            bonjour <br /> je suis , {" "}<span className="text-accent">
                Tagakou penka bill
            </span>
        </h2>
        <p className="text-[1.4rem] md:text-[1rem]">Je suis un développeur web spécialisé dans le développement d'interfaces utilisateur modernes et responsive. Mon expertise se base sur React, Tailwind CSS, et DaisyUI, avec une attention particulière portée sur l'UX et l'accessibilité.</p>
        <a href="#contact" className="hover:bg-transparent">
          <button className="btn rounded-xl m-4
          btn-primary w-full md:w-fit"  > <Mail /> Contact me</button>
        </a>
       </div>
       <div className="md:ml-60 text-center">
        <img src={img} alt="" className=" md:h-full w-80 md:w-[100rem] object-cover rounded-2xl" />
       </div>
      </div>
    </div>
  )
}

export default Home