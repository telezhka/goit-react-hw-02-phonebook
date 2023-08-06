import React, { useState } from 'react';
import { ContactList } from './ContactsList';
import { Form } from './Form';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
      <Form
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        onAddContact={addContact}
      />
      <ContactList contacts={contacts} />
    </div>
  );
};
