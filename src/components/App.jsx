import css from './app.module.css';
import React, { Component } from 'react';
import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    const namesArr = this.state.contacts.map(el => el.name.toLocaleLowerCase());

    if (!namesArr.includes(name.toLocaleLowerCase())) {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { id: nanoid(5), name: name, number: number },
        ],
      }));
    } else {
      alert(`"${name}" is already added to contact list.`);
    }
    console.log(this.state.contacts)
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
          <Filter
            filter={filter}
            onChangeInput={this.handleChangeSearch}
            applyFilter={this.applyFilter}
            toDeleteContact={this.handleDeleteContact}
          />
        </div>
      </div>
    );
  }
}
