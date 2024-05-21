import ContactItem from "../ContactItem";
import styles from "./styles.module.css";

const ContactsList = ({ list, fetchContacts }) => {
    return (
        <div className={styles.container}>
            <hr />

            <div className={styles.container}>
                <h2>Contacts List</h2>

                {list.map((contact) => (
                    <ContactItem
                        key={contact.id}
                        contact={contact}
                        fetchContacts={fetchContacts}
                    />
                ))}
            </div>
        </div>
    );
};

export default ContactsList;
