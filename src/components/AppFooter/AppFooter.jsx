import "./AppFooter.css";
import BroshLogo from "../../img/BroshLogo.png";
import Bhad1Logo from "../../img/Bhad1Logo.png";
import givatiLogo from "../../img/Logo.png";
function AppFooter() {
  return (
    <footer className="footer">
      <div className="image-container" style={{ margin: "0 auto" }}>
        <img src={givatiLogo} alt={givatiLogo} />
      </div>
    </footer>
  );
}

export default AppFooter;
