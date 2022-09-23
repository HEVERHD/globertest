import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="header_container">
      <Navbar />
      <div>
        <h1>
          ESTÁR CÓMODO,
          <br />
          NUNCA FUE TAN FÁCIL.
        </h1>
      </div>
      <div className="butonDiv">
        <button type="buton" className="buton">
          SHOP
        </button>
      </div>
    </div>
  );
};
