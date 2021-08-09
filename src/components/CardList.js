import UserCard from "./UserCard";

const CardList = ({ users, loading }) => {
    if (loading) {
        return <h2 className="loadingSign">users loading...</h2>;
    }

    return (
        <div className="cardList">
            {users.map((user, index) => {
                return <UserCard userData={user} key={index} />;
            })}
        </div>
    );
};

export default CardList;
