import React from 'react';
import PropTypes from 'prop-types';
import { Item, Title, Button } from './eachContact.styled';
import { useDispatch } from 'react-redux';
import { remove } from '../../../redux/contacts/contactsSlice';

export const EachContact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Title>
        {contact.name}: {contact.number}
      </Title>
      <Button type="button" onClick={() => dispatch(remove(contact.name))}>
        Delete
      </Button>
    </Item>
  );
};

EachContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
