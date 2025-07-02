
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <h2>News<span className="hunt">HUNT</span></h2>
      <div className="social">
          <a href="https://github.com/SwarupPal2006" target="main"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/coding_with_swarup?igsh=MTU3ejBvN3VwZWdneA==" target="main"><i className="fab fa-instagram"></i></a>
          <a href="https://t.me/Sundarban_QUIZZ_Official" target="main"><i className="fab fa-telegram-plane"></i></a>
          <a href="https://www.linkedin.com/in/swarup-pal-40aaa2331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="main"><i className="fab fa-linkedin-in"></i></a>
     </div>
      <hr></hr>
     <p>© {new Date().getFullYear()} NewsHUNT - All right reserved.</p>
    </footer>
  );
};

export default Footer;
