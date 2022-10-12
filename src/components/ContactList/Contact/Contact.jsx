import React from 'react';
import PropTypes from 'prop-types';
import css from './contact.module.css';

const Contact = ({ name, number, toDelete }) => {
  return (
    <li className={css.contact}>
      <span className={css.name}>{name}</span>
      <span className={css.number}>{number}</span>
      <button className={css.button} onClick={toDelete} type="button">
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  toDelete: PropTypes.func,
};

export default Contact;
