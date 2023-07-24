import css from './LoginSingUp.module.css';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import BackBtn from './BackBtn/BackBtn';
import { isLoggedInSelector} from '../../redux/auth/selectors';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const LoginSingUp = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isLoggedIn);
  }, [isLoggedIn]);

  const handleChange = e => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <div className={css.SignUpConteiner}>
        <BackBtn></BackBtn>
        <div className={css.SignUpForm}>
          <input
            type="checkbox"
            id="chk"
            aria-hidden="true"
            checked={isChecked}
            onChange={handleChange}
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
