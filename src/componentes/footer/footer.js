import "./footer.css";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Instagram: <a href="https://instagram.com/tuProfe" target="_blank" rel="noopener noreferrer">@tuProfe</a></p>
      <p>Dirección: Calle 12354, Ciudad</p>
      <div className="socials">
        <a href="https://instagram.com/tuProfe" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com/tuProfe" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://linkedin.com/in/tuProfe" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <p>© {new Date().getFullYear()} Tu Profe Particular</p>
    </footer>
  );
}

export default Footer;