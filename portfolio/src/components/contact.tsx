import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className="py-20 px-[4vw] md:px-[10vw]" id="contact">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[2rem] text-center md:text-[4rem] font-bold mb-12 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text"
            >
                Contactez-moi
            </motion.h2>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
            >
                <form action="https://formspree.io/f/myzwyjwb" method="POST" className="w-full md:w-[60vw] lg:w-[40vw] bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl space-y-6">
                    <div className="form-control">
                        <label htmlFor="name" className="label font-semibold text-slate-300 mb-1 block">Nom</label>
                        <input type="text" name="name" placeholder="Votre nom" className="w-full bg-slate-900/50 text-white input input-bordered border-slate-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-xl px-4 py-3 outline-none transition-all" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email" className="label font-semibold text-slate-300 mb-1 block">Email</label>
                        <input type="email" name="email" placeholder="votre@email.com" className="w-full bg-slate-900/50 text-white input input-bordered border-slate-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-xl px-4 py-3 outline-none transition-all" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="subject" className="label font-semibold text-slate-300 mb-1 block">Sujet</label>
                        <input type="text" name="subject" placeholder="Le sujet de votre message" className="w-full bg-slate-900/50 text-white input input-bordered border-slate-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-xl px-4 py-3 outline-none transition-all" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="message" className="label font-semibold text-slate-300 mb-1 block">Message</label>    
                        <textarea placeholder="Votre message..." name="message" rows={5} className="w-full bg-slate-900/50 text-white textarea textarea-bordered border-slate-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-xl px-4 py-3 outline-none transition-all resize-none" required></textarea>
                    </div>
                    
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow duration-300 mt-4"
                    >
                        Envoyer le message
                    </motion.button>
                </form>
            </motion.div>
        </div>
    )
}

export default Contact