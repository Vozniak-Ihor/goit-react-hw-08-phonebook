import { NavLink } from 'react-router-dom';
import React from 'react';
import css from './Home.module.css';
const Home = () => {
  return (
    <>
      <div className={css.header}>
        <div className={css.innerHeader}>
          <h1 className={css.homeTitle}>Hello I'm your phone book </h1>
          <div className={css.containerNavLink}>
            <NavLink to="/registration" className={css.btn}>
              <svg width="280px" height="60px" viewBox="0 0 280 60">
                <polyline points="279,1 279,59 1,59 1,1 279,1" />
                <polyline points="279,1 279,59 1,59 1,1 279,1" />
              </svg>
              <span>Sign up now and add your first contact</span>
            </NavLink>
          </div>
        </div>

        <div>
          <svg
            className={css.waves}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className={css.parallax}>
              <use
                xlinkHref="#gentle-wave" // Note: Updated attribute name to xlinkHref
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)" // Note: Added closing parenthesis
              />
              <use
                xlinkHref="#gentle-wave" // Note: Updated attribute name to xlinkHref
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)" // Note: Added closing parenthesis
              />
              <use
                xlinkHref="#gentle-wave" // Note: Updated attribute name to xlinkHref
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)" // Note: Added closing parenthesis
              />

              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      <div>
        <p className={css.linkForMe}>
          Created by
          <a
            href="https://www.linkedin.com/in/ihor-vozniak2004/"
            className={css.linkForMe2}
          >
            Ihor Vozniak
          </a>
        </p>
      </div>
    </>
  );
};

export default Home;