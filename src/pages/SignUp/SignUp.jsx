import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SignUp.module.css';
const SignUp = () => {
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
            <form>
              <label
                htmlFor="chk"
                aria-hidden="true"
                className={css.SignUpLabel}
              >
                Sign up
              </label>
              <input
                type="text"
                name="txt"
                placeholder="User name"
                required
                className={css.SignUpInput}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className={css.SignUpInput}
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
                className={css.SignUpInput}
              />
              <button className={css.SignUpBtn}>Sign up</button>
            </form>
          </div>

          <div className={css.LoginForm}>
            <form>
              <label
                htmlFor="chk"
                aria-hidden="true"
                className={css.LoginLabel}
              >
                Login
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
        </div>
      </div>
    </>
  );
};

export default SignUp;
