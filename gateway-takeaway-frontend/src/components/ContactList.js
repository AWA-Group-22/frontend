import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ContactList(props) {
  return (
    <div className="contactListView">
      <div className="contactList">
      { props.contacts.map(contact =>
        <Link to={ contact.id }>
          <div className="contactListElement">{contact.lastName} {contact.firstName}</div>
        </Link>
      )}
      </div>
      <div className="contactDetail">
        Here the details of active contact
        <Outlet />
      </div>
    </div>
  )
}
