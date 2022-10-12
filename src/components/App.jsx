import css from './app.module.css';
import React, { Component } from 'react';
import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  render() {
    return (
      <div className={css.app}>
        <div className={css.appContainer}>
          <Title title="Add contact" />
          <ContactForm />
          <Title title="Find contact" />
          <Filter />
        </div>
      </div>
    );
  }
}
