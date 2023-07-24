import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../../redux/operations';
// import { errorSelector } from '../../redux/contactSlice/contactSelectors';

import AppBar from '../AppBar/AppBar';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import LoginSingUp from 'pages/LoginSingUp/LoginSingUp';
// import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <AppBar/>}>
        <Route index element={<Home />} />
        <Route path="/registration" element={<LoginSingUp/>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
