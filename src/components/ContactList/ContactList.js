import Item from "../ContactListItem";
import l from "./ContactList.module.css"

function List({ contacts, filter, onClick }) {
  return (
    <ul className={l.list}>
      <Item contacts={contacts} filter={filter} onClick={onClick} />
    </ul>
  );
}

export default List;
