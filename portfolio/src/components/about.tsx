import { motion } from 'framer-motion'
import img from '../assets/pp.jpeg'
import { Clock, Paintbrush,LetterText } from "lucide-react"

const about = [
    {
        id: 1 ,
        title: "Développeur Web Front-end",
        description: "Je suis un développeur en quête de nouvelles expériences et de défis.",
        icons:<LetterText />,
    },
    {
        id: 2 ,
        title: "Développeur UX/UI",
        description: "Je suis passionné par l'UX et l'UI, créant des interfaces intuitives.",
        icons:<Paintbrush />,
    },
    {
        id: 3 ,
        title: "Développeur Passionné",
        description: "Je suis passionné par mon travail, et j'apprends constamment de nouvelles compétences.",
        icons:<Clock /> 
    }
]

const About = () => {
    return (
        <div className="bg-dark block py-20 px-10 md:px-32" id='About'>
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[2rem] text-center md:text-[4rem] font-bold mb-8 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text"
            >
                À Propos de moi
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[1.2rem] md:text-[1.1rem] text-slate-300 text-center max-w-4xl mx-auto mb-16"
            >
                Je suis un jeune développeur spécialisé dans les technologies HTML/CSS/JS. Je maîtrise les bibliothèques React, Tailwind CSS, et DaisyUI, avec une attention particulière portée sur l'UX et l'accessibilité. Vous pouvez compter sur moi pour transformer de simples images ou idées en sites web totalement responsive, attractifs, et interactifs pour le bien de vos utilisateurs.
            </motion.p>
            
            <div className='lg:mx-32 md:flex-col mx-10 space-y-10 lg:space-y-0 lg:space-x-10 my-6 flex flex-col lg:flex-row items-center'>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full lg:w-1/2"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl blur opacity-20"></div>
                    <img src={img} alt="About me" className="relative w-80 md:w-full h-auto object-cover rounded-2xl shadow-xl border border-white/10" />
                </motion.div>
                
                <div className='w-full lg:w-1/2 flex flex-col space-y-6'>
                    {about.map((item, index) => (
                        <motion.div 
                            key={item.id} 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className='flex flex-col md:flex-row items-center md:items-start text-center md:text-left bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-lg'
                        >
                            <div className='text-[2.5rem] text-fuchsia-500 mb-4 md:mb-0 md:mr-6'>
                                {item.icons}
                            </div>
                            <div>
                                <h3 className="text-[1.4rem] md:text-[1.2rem] font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About