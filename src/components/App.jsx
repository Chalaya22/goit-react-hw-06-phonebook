import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  // const [contacts, setContacts] = useState(() => {
  //   const contactsInString = localStorage.getItem('contacts');
  //   const contactsIsParsed = JSON.parse(contactsInString) ?? contacts;
  //   return contactsIsParsed;
  // });
  // const [filter, setFilter] = useState(' ');

  // useEffect(() => {
  //   const contactsInString = JSON.stringify(contacts);
  //   localStorage.setItem('contacts', contactsInString);
  // }, [contacts]);

  //add
  // const handleAddContact = contactList => {
  //   if (contacts.some(contact => contact.name === contactList.name)) {
  //     alert(`'${contactList.name}' is already in contact`);
  //     return;
  //   }

  //   const newContact = {
  //     ...contactList,
  //     id: nanoid(),
  //   };
  //   setContacts([...contacts, newContact]);
  // };

  //delete
  // const onDeleteHandler = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  //filter
  // const onFilter = event => {
  //   setFilter(event.target.value);
  // };
  // const onFilterContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  //   );
  // };

  // const filteredContacts = onFilterContacts();

  return (
    <section>
      <h1 className="titlePhone">Phonebook</h1>
      <ContactForm />

      <h2 className="titleContact">Contacts</h2>
      {contacts.length > 1 && <Filter />}

      {contacts.length !== 0 && <ContactList />}
    </section>
  );
};
