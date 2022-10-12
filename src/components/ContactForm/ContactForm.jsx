import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  render() {
    return (
      <>
        <form className={css.form} action="">
          <div className={css.div}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <input
              className={css.input}
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className={css.div}>
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <input
              className={css.input}
              type="tel"
              name="number"
              id="number"
              placeholder="Enter number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
