import css from './Login.module.css';
const Login = () => {
  return (
    <>
      <form>
        <label htmlFor="chk" aria-hidden="true" className={css.LoginLabel}>
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
    </>
  );
};

export default Login;
