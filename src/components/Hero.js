import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            We Change Everything
            <br />
            WordPress
          </h1>

          <p>This is the only WordPress theme you will ever want to use.</p>

          <div className="hero-buttons">
            <button className="btn btn-primary">READ MORE</button>

            <button className="btn btn-light">DOWNLOAD NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
