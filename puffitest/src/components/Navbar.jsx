import puffi from "../assets/img_nav/puffi.png";
import puffirain from "../assets/img_nav/puffi_rain.png";
import pufficart from "../assets/img_nav/puffi_cart.png";
import puffinap from "../assets/img_nav/puffi_nap.png";
import puffiPuff from "../assets/img_nav/puffi_puff.png";

import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className=" navbar_container ">
      <img className="img_logo" src={puffi} alt="puffi" />
      <ul>
        <li>
          <Link to="#" className="product_navbar">
            <img className="img_nav" src={puffiPuff} alt="img_Navbar" />
            PUFI PUFF
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img_nav" src={puffirain} alt="img_Navbar" />
            PUFI RAIN
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img_nav" src={pufficart} alt="img_Navbar" />
            PUFI CART
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img_nav" src={puffinap} alt="img_Navbar" />
            PUFI NAP
          </Link>
        </li>
      </ul>
      <div className="user">
        <p>MI CUENTA</p>

        <p>MI COMPRA</p>
      </div>
    </div>
  );
};
