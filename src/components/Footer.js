import "./Footer.css";
import BackToTop from "./BackToTop";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>Theme by Colorlib Powered by WordPress</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            f
          </a>
          <a href="#" aria-label="X">
            X
          </a>
          <a href="#" aria-label="LinkedIn">
            in
          </a>
          <a href="#" aria-label="YouTube">
            ▶
          </a>
          <a href="#" aria-label="Instagram">
            ◎
          </a>

          <BackToTop />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
