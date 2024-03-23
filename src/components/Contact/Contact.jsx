import { FaPhoneFlip } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <div className={css.contactBox}>
      <div>
        <p className={css.pText}>
          <span className={css.icon}>
            <FaUserLarge />
          </span>
          {name}
        </p>
        <p className={css.pText}>
          <span className={css.icon}>
             <FaPhoneFlip />           
          </span>
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
