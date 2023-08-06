import React from 'react';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
