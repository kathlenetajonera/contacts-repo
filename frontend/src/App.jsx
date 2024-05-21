import { useEffect, useState } from "react";
import constants from "./constants";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";

function App() {
    const [contactsList, setContactsList] = useState([]);

    const fetchContacts = async () => {
        try {
            const res = await fetch(constants.API_URL);
            const json = await res.json();
            const data = json.data;

            setContactsList(data);
        } catch (error) {
            console.log("handle error ", error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div className="main-container">
            <div className="container">
                <h1>Add New Contact</h1>

                <ContactForm setContactsList={setContactsList} />

                {contactsList.length > 0 && (
                    <ContactsList
                        list={contactsList}
                        fetchContacts={fetchContacts}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
