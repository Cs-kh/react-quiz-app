import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);
    const deletConatctHandler = (id) => {
        props.getConatctId(id)
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deletConatctHandler} key={contact.id }/>
        )
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList
