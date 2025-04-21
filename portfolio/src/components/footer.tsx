
import { MessageCircle,AtSign } from "lucide-react";

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
                 </div>
                </div>
            </div>
        </footer>
    </div>

  )
}
export default footer;
