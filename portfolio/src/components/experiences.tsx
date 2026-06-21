import { motion, Variants } from 'framer-motion'

const skillCategories = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"]
    },
    {
        title: "Backend",
        skills: ["PHP", "Node.js", "Laravel", "MySQL"]
    },
    {
        title: "Outils",
        skills: ["Git", "GitHub", "VS Code"]
    }
]

const certif = [
    {
        id: 1,
        title: "Data-Literacy",
        description: "Je suis certifié data-literacy par Coursera, avec l'Université d'Oxford et le MIT.",
        date: "2025",
    },
    {
        id: 2,
        title: "IOT",
        description: "Je suis certifié IOT par Coursera, avec Yonsei University.",
        link :'https://coursera.org/share/36b861885d781d2746766088ca052b08',
        date: "2025",
    },
    {
        id: 3,
        title: "Google Cloud",
        description: "Je suis certifié par Coursera, avec Google Cloud.",
        link :'https://coursera.org/share/256cf7996dcead047da7c021cb5ef0bc',
        date: "2025",
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
        opacity: 1, 
        scale: 1,
        transition: { type: "spring", stiffness: 200, damping: 10 }
    }
}

const Experiences = () => {
    return (
        <div id='experiences' className="py-20 px-10 md:px-32 bg-dark">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[2rem] text-center md:text-[4rem] font-bold mb-16 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text"
            >
                Expériences & Compétences
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">   
                
                {/* Skills Section */}
                <div className="w-full lg:w-1/2">
                    <motion.h3 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='capitalize text-[1.5rem] mb-8 text-center lg:text-left font-semibold text-white'
                    > 
                        Mes Compétences Techniques
                    </motion.h3>
                    <div className="space-y-8">
                        {skillCategories.map((category, index) => (
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={index} 
                                className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700"
                            >
                                <h4 className="text-xl font-bold text-fuchsia-400 mb-4">{category.title}</h4>
                                <motion.div 
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="flex flex-wrap gap-3"
                                >
                                    {category.skills.map((skill, i) => (
                                        <motion.span 
                                            variants={skillVariants}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            key={i} 
                                            className="px-4 py-2 bg-slate-700/50 hover:bg-purple-600/30 border border-slate-600 hover:border-purple-500 text-slate-200 rounded-lg text-sm font-medium transition-colors cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="w-full lg:w-1/2">
                    <motion.h3 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="capitalize text-[1.5rem] mb-8 text-center lg:text-left font-semibold text-white"
                    > 
                        Mes Certifications
                    </motion.h3>
                    <div className="flex flex-col gap-6">
                        {certif.map((cret, index) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ x: 10 }}
                                key={cret.id} 
                                className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-2xl border-l-4 border-fuchsia-500 shadow-lg relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300 text-6xl">
                                    🎓
                                </div>
                                <h4 className="text-[1.5rem] font-bold text-white mb-2">{cret.title}</h4>
                                <p className="text-slate-300 mb-4 text-sm md:text-base pr-8">{cret.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-xs font-bold border border-purple-500/30">{cret.date}</span>
                                    {cret.link && (
                                        <a href={cret.link} target="_blank" rel="noopener noreferrer" className='text-sm text-fuchsia-400 hover:text-fuchsia-300 underline font-medium'>
                                            Voir le certificat &rarr;
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
           
            </div>
        </div>
    )
}

export default Experiences