import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ contact, onDeleteContact }) {
  return (
    <div className={css.contactBox}>
      <div>
        <span className={css.icon}>
          <FaUser />
          {contact.name}{" "}
        </span>

        <span className={css.icon}>
          <BsFillTelephoneFill />
          {contact.number}
        </span>
      </div>
      <button
        onClick={() => onDeleteContact(contact.id)}
        className={css.deleteBtn}
        type="button"
      >
        Delete
      </button>
    </div>
  );
}
