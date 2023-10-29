import css from './LoginSingUp.module.css';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import BackBtn from './BackBtn/BackBtn';

const LoginSingUp = () => {
  return (
    <>
      <div className={css.SignUpConteiner}>
        <BackBtn></BackBtn>
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