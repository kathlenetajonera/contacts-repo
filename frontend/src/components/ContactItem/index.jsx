import constants from "../../constants";
import styles from "./styles.module.css";

const ContactItem = ({ contact, fetchContacts }) => {
    const { id, name, email, mobile } = contact;

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${constants.API_URL}/${id}`, {
                method: "DELETE",
            });

            await response.json();
            fetchContacts();
        } catch (error) {
            console.log("\x1b[36m%s\x1b[0m", "Handle error ", error);
        }
    };

    return (
        <div key={id} className={styles.container}>
            <div className={styles.details}>
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{mobile}</p>
            </div>

            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
};

export default ContactItem;
