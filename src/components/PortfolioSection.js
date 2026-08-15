import "./PortfolioSection.css";
import portfolioImage from "../assets/flexible-portfolio_11zon.png";

function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-content">
          <h2>Portfolio Section</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam
            feugiat, eu tincidunt mauris aliquam. Duis commodo velit ligula eu
            interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula
            id ultricies.
          </p>

          <button className="section-btn">SEE IT IN ACTION</button>
        </div>
        <div className="portfolio-image">
          <img src={portfolioImage} alt="portfolio" />
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
