
import { MessageCircle,AtSign, Linkedin } from "lucide-react";

const footer = () => {
  return (
    <div>
        <footer>
            <div className="footer footer-center p-10 bg-primary container  text-primary-content">
                <div>
                    <p>Copyright © 2025 - All right reserved by Tagakou penka bill</p>
                 <div className="flex gap-4">
                 <a href="tel:+237658643770" className="hover:bg-transparent"><MessageCircle /></a> 
                 <a href="mailto:billpenka237@gmail.com" target="_blank" className="hover:bg-transparent"> <AtSign /></a>
                 <a href="https://www.linkedin.com/in/bill-penka-260367353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="hover:bg-transparent"> <Linkedin /> </a>
                 </div>
                </div>
            </div>
        </footer>
    </div>

  )
}
export default footer;
