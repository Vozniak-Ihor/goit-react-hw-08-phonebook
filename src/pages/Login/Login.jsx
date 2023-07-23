import css from './Login.module.css';
import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className={css.login}>
        <form>
          <label htmlFor="chk" aria-hidden="true" >
            <NavLink to="/login" className={css.LoginLabel}>Login</NavLink>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={css.LoginInput}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required
            className={css.LoginInput}
          />
          <button className={css.LoginBtn}>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
