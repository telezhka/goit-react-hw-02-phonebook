import React, { useState } from 'react';
import { ContactList } from './ContactsList';
import { Form } from './Form';
import { FilterInput } from './FilterInput';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    // Check if the name already exists in contacts
    const isNameExists = contacts.some(
      contact => contact.name === newContact.name
    );

    if (isNameExists) {
      alert(`Contact with the name "${newContact.name}" already exists!`);
    } else {
      setContacts([...contacts, newContact]);
    }
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
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
      <h2>Contacts</h2>
      <FilterInput value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
