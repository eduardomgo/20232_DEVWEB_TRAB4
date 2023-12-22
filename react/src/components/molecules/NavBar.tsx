import { Link } from "react-router-dom";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../assets/colors";
import dudu from "/dudu.jpg";
import carrinho from "/carrinho.png";


function NavBar() {
  return (
    <div style={{backgroundColor: PRIMARY_COLOR}}>
      <div className="container pt-3 pb-3">
        <div className="row">
          <div className="col-3 d-flex align-items-center">
            <Link to="/" style={{ textDecoration: "none", fontSize: "16px" }}>
              <img className="d-none d-md-block" src={dudu} style={{ width: "70px" }} />
            </Link>
          </div>
          <div className="col-6">
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end">
            <ul style={{ listStyleType: "none" }}>
              <li className="mt-2 d-flex justify-content-center">
                <Link to="/carrinho" style={{ textDecoration: "none" }}>
                  <img className="d-none d-md-block" src={carrinho} style={{ width: "35px" }} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ padding: "12px", backgroundColor: SECONDARY_COLOR }}></div>
    </div>
  );
}

export default NavBar;
