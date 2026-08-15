import "./ParallaxSection.css";

function ParallaxSection() {
  return (
    <section className="parallax-section">
      <div className="parallax-overlay">
        <div className="parallax-content">
          <h2>Small Parallax Section</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum.
            Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget
            tincidunt leo ornare quis.
          </p>

          <button className="parallax-btn">MORE INFO</button>
        </div>
      </div>
    </section>
  );
}

export default ParallaxSection;
