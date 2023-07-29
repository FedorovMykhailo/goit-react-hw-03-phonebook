import css from "../ContactList/ContactList.module.css"
import PropTypes from "prop-types";

const ContactList = ({ contacts, handleDelete }) => {
    // console.log(contacts);
   
    return (
        <ul className={css.contactList}>
            {contacts.map(({ id, name, number }) =>
            <li key={id} className={css.contactListItem}>
                {name}: {number}
                    <button className={css.contactListButton} type="button" onClick={() => { handleDelete(id) }}>Delete</button>
            </li>)}
            
        </ul>
    )
}

export default ContactList

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    handleDelete: PropTypes.func.isRequired,
}