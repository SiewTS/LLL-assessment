import UserCard from "./UserCard";

const CardList = ({ users }) => {
    return (
        <div className="cardList">
            {users.map((user, index) => {
                return <UserCard userData={user} key={index} />;
            })}
        </div>
    );
};

export default CardList;
