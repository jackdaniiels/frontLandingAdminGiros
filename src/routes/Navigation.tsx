import { Suspense } from "react";
import { useContext } from "react";

import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          {/* <nav>
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav> */}

          <Routes>
            {routes.map(({ to, path, Component }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}
            <Route path="/home" element={<h1>Home page</h1>} />
            <Route path="/*" element={<Navigate to="/template" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
