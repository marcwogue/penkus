import img from '../assets/WhatsApp Image 2025-04-14 at 05.31.37.jpeg'
import { Clock, Paintbrush,LetterText } from "lucide-react"

const about = [
    {
        id: 1 ,
        title: "developpeur web front-end",
        description: "je suis developpeur en quete d'experiences",
        icons:<LetterText />,
    },
    {
        id: 2 ,
        title: "developeur UX/UI",
        description: "je suis passionne de l'UX et l'UI",
        icons:<Paintbrush />,
    },
    {
        id: 3 ,
        title: "developpeur passionne",
        description: "je suis passionne ^par mon travail, et j'apprend constamment de nouvelles compétences",
        icons:<Clock /> 
    }
]

const About = () => {
    return (
        <div className="bg-dark  block px-10 md:px-32" id='About'>
            <h2 className="text-[2rem] text-center underline md:text-[4rem] font-bold">à propos de moi</h2>
            <p className="text-[1.4rem] md:text-[1rem]">je suis un jeune dev specialise dans les technologie HTML/CSS/JS; je maitrise les bibliotheque React, Tailwind CSS, et DaisyUI, avec une attention particulière portée sur l'UX et l'accessibilité. vous pouvez compter sur moi pour transformer de simples images, ou idee en site web totalement responsive ,  attractif, et interactifs pour le biens de  vos utilisateurs</p>
            <div className='md:mx-32 mx-10 space-y-5 md:space-x-4 my-6 flex flex-col md:flex-row'>
                <div >
                    <img src={img}  alt="" className="w-80 md:w-full h-[80%]  rounded-2xl" />
                </div>
                
                <div className='space-y-5'>
                    {about.map((item) => (
                        <div key={item.id} className=' justify-center text-center bg-warning text-black rounded-2xl p-4 '>
                            <div className='text-[2rem] md:text-[3rem]'>
                                {item.icons}
                            </div>
                            <h3 className="text-[1.4rem] md:text-[1rem] font-bold">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About