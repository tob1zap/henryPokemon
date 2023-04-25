import { Bar, HomeAbout, DivNavBar } from "./StyledNavBar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Bar>
      <DivNavBar>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <HomeAbout>HOME</HomeAbout>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <HomeAbout>ABOUT ME</HomeAbout>
        </Link>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <HomeAbout>CREATE YOUR POKEMON</HomeAbout>
        </Link>
      </DivNavBar>
    </Bar>
  );
}
