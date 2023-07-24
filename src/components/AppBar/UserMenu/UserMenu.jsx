import css from './UserMenu.module.css';
import { userNameSelector } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
const UserMenu = () => {
  const name = useSelector(userNameSelector);
  const dispatch = useDispatch();
  const onlogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div className={css.UserMenu}>
        <p>{`happy day! ${name}`}</p>
        <button type="button" onClick={onlogOut}>
          Logout
        </button>
      </div>
    </>
  );
};

export default UserMenu;
