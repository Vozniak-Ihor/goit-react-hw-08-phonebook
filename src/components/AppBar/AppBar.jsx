import { NavLink, Outlet } from 'react-router-dom';

const AppBar = () => {
  return (
    <>
      <header>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <NavLink to="/">Home</NavLink>
          {/* <NavLink to="/login">login</NavLink> */}
          <NavLink to="/registration">registration</NavLink>
          <NavLink to="/contacts">contant</NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AppBar;
