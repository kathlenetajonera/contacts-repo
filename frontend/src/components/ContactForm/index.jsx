import { useState } from "react";
import constants from "../../constants";
import styles from "./styles.module.css";

const initialState = {
    name: "",
    email: "",
    mobile: "",
};

const ContactForm = ({ setContactsList }) => {
    const [data, setData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(constants.API_URL, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await res.json();
            const response = json.data;

            setContactsList((prev) => [...prev, response]);
            setData(initialState);
        } catch (error) {
            console.log("\x1b[36m%s\x1b[0m", "Handle error ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputWrapper}>
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="mobile">Mobile</label>
                <input
                    name="mobile"
                    type="text"
                    value={data.mobile}
                    onChange={handleChange}
                />
            </div>

            <button className={styles.button}>New Contact</button>
        </form>
    );
};

export default ContactForm;
