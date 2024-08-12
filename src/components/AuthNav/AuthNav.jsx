import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './AuthNav.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}

export default function AuthNav() {
  return (
    <div className={css.container}>
      <NavLink className={buildLinkClass} to='/register'>
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to='/login'>
        Sign in
      </NavLink>
    </div>
  )
}