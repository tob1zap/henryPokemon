import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import landingPokeball from "../../Assets/landingPokeball.gif";

const Landing = () => {
  return (
    <div className={style.landing}>
      <button className={style.boton}>
        <Link to="/home">
          <img className={style.imagen} src={landingPokeball} alt="" />
        </Link>
      </button>
    </div>
  );
};

export default Landing;
