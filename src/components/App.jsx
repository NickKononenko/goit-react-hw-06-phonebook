import React from 'react';
import { Container } from './app.styled';
import { ContactsForm } from './Form';
import { ContactsList } from './Contacts';

export const App = () => {
  return (
    <Container>
      <ContactsForm />
      <ContactsList />
    </Container>
  );
};
