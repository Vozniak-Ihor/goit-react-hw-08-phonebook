import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/operations';
import AppBar from '../AppBar/AppBar';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
const Home = lazy(() => import('../../pages/Home/Home'));
const LoginSingUp = lazy(() => import('../../pages/LoginSingUp/LoginSingUp'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route
          path="/registration"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginSingUp />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/registration" component={<Contacts />} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
