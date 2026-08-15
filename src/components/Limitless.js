import "./Limitless.css";
import limitlessoption from "../assets/mountain_11zon.jpg";

function Limitless() {
  return (
    <div className="limitless-section">
      <div className="limit-container">
        <div className="limit-text">
          <h2>Limitless Options</h2>
          <p>
            Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum
            sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus.
            <br></br>
            accumsan non efficitur id, pretium quis ante
          </p>
          <button className="btn btn-primary">DOWNLOAD NOW</button>
        </div>

        <div className="limit-image">
          <img src={limitlessoption} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Limitless;
