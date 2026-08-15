import "./SeoSection.css";
import seoImage from "../assets/laptop-seo.png";

function SeoSection() {
  return (
    <section className="seo-section">
      <div className="seo-container">
        <div className="seo-image">
          <img src={seoImage} alt="Seo Friendly" />
        </div>

        <div className="seo-content">
          <h2>SEO Friendly</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam
            feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et
            interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula
            id ultricies.
          </p>

          <button className="section-btn">READ MORE</button>
        </div>
      </div>
    </section>
  );
}

export default SeoSection;
