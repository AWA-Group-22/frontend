import React from 'react'
import { useParams } from 'react-router-dom';

export default function ContactDetailView(props) {

  const result = useParams();

  const contact = props.contacts.find(contact => contact.id === result.contactId);
  if(contact == null) {
    return <div>No matching contact</div>
  }

  return (
    <div>
      <table>
        <tr>
          <td>First Name</td>
          <td>{contact.firstName}</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>{contact.lastName}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{contact.address}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>{contact.city}</td>
        </tr>
        <tr>
          <td>County</td>
          <td>{contact.county}</td>
        </tr>
        <tr>
          <td>State</td>
          <td>{contact.state}</td>
        </tr>
      </table>

    </div>
  )
}
