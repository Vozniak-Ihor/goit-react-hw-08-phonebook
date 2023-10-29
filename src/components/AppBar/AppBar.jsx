import { NavLink, Outlet } from 'react-router-dom';
import UserMenu from './UserMenu/UserMenu';
import { isLoggedInSelector } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import css from './AppBar.module.css';
const AppBar = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <>
      <header className={`${css.header}`}>
        <div className={css.headerConteiner}>
          <NavLink to="/" className={css.AppBarLink}>
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/contacts" className={css.AppBarLink}>
              Contants
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink to="/registration" className={css.AppBarLink}>
              Sind Up
            </NavLink>
          )}
          {isLoggedIn && <UserMenu />}
        </div>
      </header>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default AppBar;
