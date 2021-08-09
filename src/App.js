import { useState } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Pagination from "./components/Pagination";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);

    async function fetchData() {
        let userData;
        try {
            setLoading(true);
            setShowNav(false);

            const res = await fetch("https://randomuser.me/api/?results=100");
            userData = (await res.json()).results;
        } catch (err) {
            console.log(err);
            userData = [];
        }
        setUsers(userData);
        setLoading(false);
        setShowNav(true);
    }

    // get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const prevPage = () => {
        currentPage > 1 && setCurrentPage(currentPage - 1);
    };
    const nextPage = () => {
        currentPage >= 1 &&
            currentPage < users.length / usersPerPage &&
            setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <Header fetchData={fetchData} />
            <section className="cardSection">
                {showNav && (
                    <Pagination
                        usersPerPage={usersPerPage}
                        totalUsers={users.length}
                        currentPage={currentPage}
                        paginate={paginate}
                        prevPage={prevPage}
                        nextPage={nextPage}
                    />
                )}
                <CardList users={currentUsers} loading={loading} />
            </section>
        </>
    );
}

export default App;
