import React, { Component } from "react"
import { nanoid } from "nanoid"
import ContactForm from "./ContactForm/ContactForm"
import Filter from "./Filter/Filter"
import ContactList from "./ContactList/ContactList"

class App extends Component {

  state = {
  contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: '',
  name: '',
  number: ''
  }

  componentDidMount() {
    try {
      const contactsData = JSON.parse(localStorage.getItem('contacts'))
      if (contactsData||[]) {this.setState({ contacts: contactsData }) }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
     }
   }
    
  
  handleFormSubmit = (evt) => {
    evt.preventDefault()
    const name = evt.currentTarget.elements.name.value;
    const phone = evt.currentTarget.elements.number.value;
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()))
      return alert(`${name.toLowerCase()} is already in contacts`)
    this.setState(prev => {
      return {
        "contacts": [...prev.contacts, ({ "id": nanoid(), "name": name, "number": phone })]
      }
    } 
    )
    
    evt.currentTarget.reset()
  }

  handleFilterChange = (evt) => {
    const name = evt.currentTarget.value.toLowerCase().trim();
    return this.setState({"filter": name})
  }

  filterContacts = (filterValue) => {
    console.log(this.state.contacts)
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
  }

  handleContactDelete = (id) => {
    this.setState(prev => {
      return {
        "contacts": prev.contacts.filter(contact => contact.id !== id),
        }
    })
  }

  render() {
     return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
           color: '#010101',
           margin: '0',
           textAlign: 'left'
        
      }}
       >
         <div>
         <h1>Phonebook</h1>
         <ContactForm submit={this.handleFormSubmit} />
         <h2>Contacts</h2>
         <Filter change={this.handleFilterChange } />
         <ContactList
           contacts={this.filterContacts(this.state.filter)}
           handleDelete={this.handleContactDelete}
         />
         </div>
    </div>
  )
  }
}

export default App