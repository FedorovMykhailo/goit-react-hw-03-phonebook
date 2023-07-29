import React, { Component } from "react"
import css from "../ContactForm/ContactForm.module.css"
import PropTypes from "prop-types";

export default class FormComponent extends Component {
    
    render() {
        const { submit } = this.props
        
     return (
         <form onSubmit={submit}>
            <div className={css.formField}>
                <label id="name">Name</label>
                <input className={css.formInput}   
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
            </div>
            <div className={css.formField}>
                <label id="number">Number</label>
                <input className={css.formInput}                
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required />
            </div>
             
             <button className={css.formButton }type="submit" >Add contact</button>
        </form>
   
  )
  }
}

FormComponent.propTypes = {
    submit: PropTypes.func,
}