import { BrowserRouter } from "react-router-dom";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";

import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";

import logo from "../logo.svg";

export const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink
                to="/shopping"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="shopping" element={<ShoppingPage />} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="/*" element={<Navigate to="shopping" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
