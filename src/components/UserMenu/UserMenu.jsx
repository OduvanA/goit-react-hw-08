import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <p className={css.welcome}>Welcome, {user.name}!</p>
      <button className={css.button} type='button' onClick={() => dispatch(logout())}>Sign Out</button>
    </div>
  );
}