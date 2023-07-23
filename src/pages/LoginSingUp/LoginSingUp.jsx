import { NavLink } from 'react-router-dom';
import css from './LoginSingUp.module.css';
import SignUp from 'pages/SignUp/SignUp';
import Login from 'pages/LoginSingUp/Login/Login';

const LoginSingUp = () => {
  return (
    <>
      <div className={css.SignUpConteiner}>
        <NavLink to="/">
          <button className={css.backBtn}>Back</button>
        </NavLink>
        <div className={css.SignUpForm}>
          <input
            type="checkbox"
            id="chk"
            aria-hidden="true"
            className={css.chk}
          />
          <div className={css.SignUp}>
            <SignUp />
          </div>
          <div className={css.LoginForm}>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSingUp;
