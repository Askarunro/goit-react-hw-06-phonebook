import i from "./ContactListItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "..//../redux/store";

function Item() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter);

  return (
    <>
      {contacts
        .filter((option) =>
          option.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((contact) => (
          <li key={contact.name} className={i.item} data-id={contact.name}>
            <p>{contact.name}:</p>
            <p>{contact.number}</p>
            <button type="button" 
            onClick={()=>dispatch(remove(contact.name))} 
            className={i.btn}>
              Delete
            </button>
          </li>
        ))}
    </>
  );
}

export default Item;
