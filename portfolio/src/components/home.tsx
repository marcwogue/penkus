import { Mail, Download } from "lucide-react"
import { motion } from "framer-motion"
import img from '../assets/WhatsApp Image 2025-04-14 at 05.31.37.jpeg'

const Home = () => {
  return (
    <div id="about" className="pt-24 md:pt-32 min-h-screen flex items-center">
      <div className="my-10 w-full place-content-center flex flex-col-reverse md:flex-row items-center gap-10">
       
       <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 px-[4vw] md:px-[10vw]"
       >
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-tight">
            Bonjour, je suis <br />
            <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
                Tagakou Penka Bill
            </span>
        </h2>
        <p className="text-[1.2rem] md:text-[1.1rem] text-slate-300 leading-relaxed max-w-xl">
          Jeune développeur web spécialisé dans le développement d’interface utilisateur moderne et responsive. Passionné par l'accessibilité, je donne vie à vos projets grâce à une maîtrise technique de React, BOOTSTRAP, PHP et JAVASCRIPT.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary bg-gradient-to-r from-purple-600 to-fuchsia-600 border-none text-white rounded-xl px-8 shadow-lg shadow-purple-500/30 w-full"
            > 
              <Mail className="mr-2" /> Contactez-moi
            </motion.button>
          </a>
          {/* Remplacez '#' par le chemin vers votre fichier CV PDF, ex: '/cv.pdf' */}
          <a href="#" download="CV_Tagakou_Penka_Bill.pdf" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-purple-500 text-white rounded-xl px-8 shadow-lg w-full transition-colors duration-300"
            > 
              <Download className="mr-2" /> Télécharger mon CV
            </motion.button>
          </a>
        </div>
       </motion.div>

       <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center md:justify-end px-[4vw] md:px-[10vw]"
       >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl blur opacity-30"></div>
          {/* Remplacez la source de l'image quand vous l'aurez ! */}
          <img src={img} alt="Profile" className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border border-white/10" />
        </div>
       </motion.div>

      </div>
    </div>
  )
}

export default Home