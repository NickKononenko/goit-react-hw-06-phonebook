import React from 'react';
import { nanoid } from 'nanoid';
import { EachContact } from './EachContact';
import { Filter } from './Filter';
import {
  ContactsListContainer,
  ContactsListTitle,
  List,
} from './contacts.styled';
import { useSelector } from 'react-redux';

export const ContactsList = ({ handleChange }) => {
  const contacts = useSelector(state => state.contacts.list);
  const filter = useSelector(state => state.filter);

  const filterContactsList = contactsList => {
    return contactsList.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

  return (
    <ContactsListContainer>
      <ContactsListTitle>Contacts</ContactsListTitle>
      <Filter handleChange={handleChange} />
      <List>
        {filterContactsList(contacts).map(contact => (
          <EachContact key={nanoid(10)} contact={contact} />
        ))}
      </List>
    </ContactsListContainer>
  );
};
