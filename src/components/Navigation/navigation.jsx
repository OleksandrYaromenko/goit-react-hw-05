import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav>
        <NavLink to="/" className={makeNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeNavLinkClass}>
          Movies{" "}
        </NavLink>
      </nav>
    </header>
  );
}
