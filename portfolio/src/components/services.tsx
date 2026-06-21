import { motion, Variants } from 'framer-motion'
import { Code, Layout, Wrench, Database } from 'lucide-react'

const services = [
    {
        id: 1,
        title: "Création de sites web",
        description: "Conception de sites vitrines professionnels et sur-mesure pour votre entreprise.",
        icon: <Layout className="w-10 h-10" />
    },
    {
        id: 2,
        title: "Développement d’applications web",
        description: "Création d'applications web interactives, performantes et scalables.",
        icon: <Code className="w-10 h-10" />
    },
    {
        id: 3,
        title: "Maintenance de sites",
        description: "Mise à jour, sécurisation et optimisation des performances de vos projets existants.",
        icon: <Wrench className="w-10 h-10" />
    },
    {
        id: 4,
        title: "Conception de bases de données",
        description: "Architecture, création et optimisation de bases de données robustes.",
        icon: <Database className="w-10 h-10" />
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const Services = () => {
    return (
        <div id="services" className="py-20 px-10 md:px-32 bg-slate-900/50">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[2rem] text-center md:text-[4rem] font-bold mb-12 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text"
            >
                Mes Services
            </motion.h2>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {services.map((service) => (
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ y: -5, scale: 1.02 }}
                        key={service.id}
                        className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 shadow-lg group transition-colors duration-300 flex flex-col items-center text-center"
                    >
                        <div className="text-fuchsia-400 mb-4 bg-slate-900/50 p-4 rounded-full group-hover:bg-purple-500/20 group-hover:text-fuchsia-300 transition-colors duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Services
