import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './AppBar.module.css';
const AppBar = () => {
 return (
  <>
   <header className={`${css.header}`}>
    <div className={css.headerConteiner}>
     <NavLink to="/" className={css.AppBarLink}>
      Home
     </NavLink>
     {
      <NavLink to="/catalog" className={css.AppBarLink}>
       Contants
      </NavLink>
     }
     {
      <NavLink to="/favorites" className={css.AppBarLink}>
       Favorites
      </NavLink>
     }
    </div>
   </header>

   <Suspense>
    <Outlet />
   </Suspense>
  </>
 );
};

export default AppBar;
