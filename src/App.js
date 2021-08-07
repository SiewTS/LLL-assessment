import { useState } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
    const [users, setUsers] = useState([]);

    async function fetchData() {
        let userData;
        try {
            const res = await fetch("https://randomuser.me/api/?results=10");
            userData = (await res.json()).results;
        } catch (err) {
            console.log(err);
            userData = [];
        }
        setUsers(userData);
    }

    return (
        <>
            <Header fetchData={fetchData} />
            <section className="cardSection">
                <CardList users={users} />
            </section>
        </>
    );
}

export default App;
