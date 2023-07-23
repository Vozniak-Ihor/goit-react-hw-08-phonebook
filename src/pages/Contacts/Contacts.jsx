import LoginForm from '../../components/LogForm/LoginForm';
import ContactsList from '../../components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';

const Contacts = () => {
  return (
    <>
      <LoginForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;