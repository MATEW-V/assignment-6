import { Outlet, useNavigate } from "react-router-dom";
import style9 from "./MoviesView.module.css";

function MoviesView() {
  return (
    <div className={style9.appcontainer}>
      <Outlet />
    </div>
  );
}

export default MoviesView;