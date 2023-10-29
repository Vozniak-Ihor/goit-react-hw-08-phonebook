import LoginForm from '../../components/LogForm/LoginForm';	
import ContactsList from '../../components/ContactsList/ContactsList';	
import Filter from '../../components/Filter/Filter';	
import { useEffect } from 'react';	
import { useDispatch, useSelector } from 'react-redux';	
import { fetchContacts } from 'redux/operations';	

const Contacts = () => {	
    const dispatch = useDispatch();	
    const auth = useSelector(state => state.auth.token);	

    useEffect(() => {	
      if (auth) {	
        dispatch(fetchContacts());	
      }	
    }, [auth, dispatch]);	
  return (	
    <>	
      <LoginForm />	
      <Filter />	
      <ContactsList />	
    </>	
  );	
};	

export default Contacts;