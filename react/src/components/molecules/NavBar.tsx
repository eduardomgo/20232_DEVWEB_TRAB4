import { Link, NavLink } from "react-router-dom";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../assets/colors";
import dudu from "/dudu.jpg";
import useCategorias from "../../hooks/useCategorias";

function NavBar() {
  const { data: categorias } = useCategorias();

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
                  <p className="text-white">Carrinho</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar navbar-dark px-5" style={{ backgroundColor: SECONDARY_COLOR }}>
        <NavLink aria-current="page" className="nav-link text-white text-uppercase fw-bold" to="/">
          TODOS
        </NavLink>
        {categorias?.map((categoria) => (
          <NavLink className="nav-link text-white text-uppercase fw-bold" to={`/${categoria.slug}`}>
            {categoria.nome}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
