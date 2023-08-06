import React, { useState } from 'react';
import { ContactList } from './ContactsList';
import { Form } from './Form';
export const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Form onAddContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};
