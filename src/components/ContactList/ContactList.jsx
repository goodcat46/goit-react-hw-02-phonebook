import React from 'react'
import PropTypes from 'prop-types'
import css from './contactList.module.css'
import Contact from './Contact/Contact'


const ContactList = props => {
  return (
    <ul className={css.contactList}>
      <Contact name='hbjhb' number='56465161'/>
      <Contact name='hbjhb' number='56465161'/>
    </ul>
  )
}

ContactList.propTypes = {}

export default ContactList