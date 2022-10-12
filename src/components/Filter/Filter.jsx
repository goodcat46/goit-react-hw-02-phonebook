import React from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';
import ContactList from 'components/ContactList/ContactList';

const Filter = props => {
  return (
    <div className={css.filter}>
      <div className={css.div}>
        <label className={css.label} htmlFor="filter">
          Filter
        </label>
        <input
          className={css.input}
          name="filter"
          type="text"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <ContactList />
    </div>
  );
};

Filter.propTypes = {};

export default Filter;
