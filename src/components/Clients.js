import "./Clients.css";
import lessImage from "../assets/less-logo_11zon.png";
import adobeImage from "../assets/adobe-logo_11zon.png";
import sassLogo from "../assets/sass-logo_11zon.png";
import jsLogo from "../assets/js-logo_11zon.png";

function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2>Our Main Clients</h2>

        <div className="clients-logos">
          <div className="client-logo">
            <img src={lessImage} alt="#" />
          </div>

          <div className="client-logo">
            <img src={adobeImage} alt="#" />
          </div>

          <div className="client-logo">
            <img src={sassLogo} alt="#" />
          </div>

          <div className="client-logo">
            <img src={jsLogo} alt="#" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
