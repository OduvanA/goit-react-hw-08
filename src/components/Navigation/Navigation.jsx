import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
      <nav className={css.container}>
        <NavLink to="/" className={buildLinkClass}>Home</NavLink>
      {isLoggedIn &&
        (<NavLink to="/contacts" className={buildLinkClass}>Phonebook</NavLink>)}
      </nav>
  );
}

