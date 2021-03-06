import React from 'react';

const Contacts = ({contacts}) => {
    return (
    <div> 
        <center><h1> Contacts List </h1></center>
        {contacts.map( (contact) => (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-tittle">{contact.name}</h5>
                    <h6 class="card-text">{contact.email}</h6>
                    <p class="card-text">{contact.company.catchPhrase}</p>
                </div>
            </div>    
        ))}
    </div>
    )
}
export default Contacts