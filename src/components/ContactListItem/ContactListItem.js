import i from './ContactListItem.module.css'
import PropTypes from 'prop-types';

function Item({contacts,filter,onClick}) {
  return (
    <>
      {contacts
        .filter((option) => option.name.toLowerCase().includes(filter.toLowerCase()))
        .map((contact) => (
          <li key={contact.name} className={i.item} data-id={contact.name}>
            <p>{contact.name}:</p>
            <p>{contact.number}</p>
            <button type="button" onClick={()=>onClick(contact.name)} className={i.btn}>
              Delete
            </button>
          </li>
        ))}
    </>
  );
}

export default Item;

Item.propTypes={
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onClick: PropTypes.func,
}