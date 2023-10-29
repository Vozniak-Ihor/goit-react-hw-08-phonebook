import { NavLink } from 'react-router-dom';
import css from './BackBtn.module.css';

const BackBtn = () => {
  return (
    <>
      <NavLink to="/">
        <button className={css.backBtn}>Back</button>
      </NavLink>
      ;
    </>
  );
};

export default BackBtn;
