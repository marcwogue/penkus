import { motion, Variants } from 'framer-motion'

const projet = [
    {
        id: 1,
        title: "E-commerce",
        description: "Site très interactif pour le e-commerce.",
        image: "https://www.wizishop.fr/media/6079aa471a21b91b9474e996/v1/top-sites-monde-wizishop.webp",
        link: "https://projet1.com"
    },
    {
        id: 2,
        title: "Portfolio",
        description: "Présentez et convainquez les employeurs par vos compétences.",
        image: "https://img.freepik.com/free-vector/flat-design-portfolio-template-design_52683-80880.jpg?semt=ais_hybrid&w=740",
        link: "https://projet2.com"
    },
    {
        id: 3,
        title: "Streaming Website",
        description: "Révolutionnez le streaming en étant toujours plus convaincant dans la présentation de votre contenu.",
        image: "https://www.privateinternetaccess.com/blog/wp-content/uploads/2024/09/Group-11-1024x680.png",
        link: "https://projet3.com"
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Projets = () => {
    return (
        <div id="projets" className="py-20 px-10 md:px-32">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[2rem] text-center md:text-[4rem] font-bold mb-12 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text"
            >
                Mes Projets
            </motion.h2>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
            {projet.map((projet) => (
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    key={projet.id} 
                    className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 border border-slate-700 shadow-xl flex flex-col"
                >
                    <div className="w-full h-56 overflow-hidden rounded-xl mb-4 relative group">
                        <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <img src={projet.image} alt={projet.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{projet.title}</h3>
                    <p className="text-slate-300 mb-6 flex-grow">{projet.description}</p>
                    <a href={projet.link} className="inline-block text-center bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300" >
                        Voir le projet
                    </a>
                </motion.div>
            ))}
            </motion.div>
        </div>
    )
}

export default Projets