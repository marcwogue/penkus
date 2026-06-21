import { MessageCircle,AtSign, Linkedin } from "lucide-react";

const footer = () => {
  return (
    <footer className="w-full bg-slate-850 text-slate-400 py-10 border-t border-slate-800">
        <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-sm md:text-base text-center">Copyright © 2025 - All rights reserved by Tagakou Penka Bill</p>
            <div className="flex gap-6">
                <a href="tel:+237658643770" className="hover:text-fuchsia-400 transition-colors duration-300 transform hover:scale-110">
                    <MessageCircle className="w-6 h-6" />
                </a> 
                <a href="mailto:billpenka237@gmail.com" target="_blank" className="hover:text-fuchsia-400 transition-colors duration-300 transform hover:scale-110">
                    <AtSign className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/bill-penka-260367353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="hover:text-fuchsia-400 transition-colors duration-300 transform hover:scale-110">
                    <Linkedin className="w-6 h-6" />
                </a>
            </div>
        </div>
    </footer>
  )
}
export default footer;
