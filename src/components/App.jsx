import css from './app.module.css';
import React, { Component } from 'react';
import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = ({ id, name, number }) => {
    const namesArr = this.state.contacts.map(el => el.name.toLowerCase());

    if (!namesArr.includes(name.toLowerCase())) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id, name: name, number: number }],
      }));
    } else {
      alert(`"${name}" is already added to contact list.`);
    }
  };

  handleDeleteContact = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(user => user.id !== userId),
    }));
  };

  handleChangeSearch = evt => {
    const { value } = evt.target;
    this.setState({ filter: value });
  };

  applyFilter = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) => {
      if (filter && !name.toLowerCase().includes(filter.toLowerCase()))
        return false;
      return true;
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={css.app}>
        <div className={css.appContainer}>
          <Title title="Add contact" />
          <ContactForm toAddContact={this.handleAddContact} />
          <Title title="Find contact" />
          <Filter filter={filter} onChangeInput={this.handleChangeSearch} />
          <ContactList
            contactList={this.applyFilter()}
            toDeleteContact={this.handleDeleteContact}
          />
        </div>
      </div>
    );
  }
}
