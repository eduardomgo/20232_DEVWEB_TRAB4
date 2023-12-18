import { NavLink, Outlet } from "react-router-dom";
import useCategorias from "../hooks/useCategorias";

const HomePage = () => {
  const { data: categorias, isLoading: isLoadingCategorias, error } = useCategorias();

  if (isLoadingCategorias) return <h6>Carregando...</h6>;

  if (error) throw error;

  return (
    <div className="row">
      <div className="col-lg-2">
        <h5>Categorias</h5>
        <div className="nav flex-column nav-pills">
          <NavLink aria-current="page" className="nav-link" to="/">
            Todos
          </NavLink>
          {categorias?.map((categoria) => (
            <NavLink className="nav-link" to={`/${categoria.slug}`}>
              {categoria.nome}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="col-lg-10">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
