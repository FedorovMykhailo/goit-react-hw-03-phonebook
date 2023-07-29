import React, { Component } from "react"
import css from "../Filter/Filter.module.css"
import PropTypes from "prop-types";

export default class Filter extends Component { 
    render() {
        const { change } = this.props
        
        return (
            <div>
                <input className={css.formInput}     
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={change}
                required />
                
            </div>
        )
    }
}

Filter.propTypes = {
    onChange: PropTypes.func,
}