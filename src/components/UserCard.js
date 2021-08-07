import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const UserCard = ({ userData }) => {
    const [showModal, setModalState] = useState(false);

    return (
        <div className="cardList__card">
            <div className="card__flex-ctn">
                <div className="flex-ctn__img">
                    <img
                        src={userData.picture.medium}
                        alt=""
                        className="img__avatar"
                    />
                </div>
                <div className="flex-ctn__nameBox">
                    <p className="nameBox__userName">
                        <span className="userName__first">
                            {userData.name.first}{" "}
                        </span>
                        <span className="userName__last">
                            {userData.name.last}
                        </span>
                    </p>
                </div>
                <Button
                    btnCtnClass="flex-ctn__btn-ctn"
                    btnClass="btn-ctn__btn"
                    btnText="view user"
                    onClick={() => {
                        setModalState(true);
                    }}
                />
            </div>

            {showModal && (
                <Modal
                    userData={userData}
                    onClick={() => {
                        setModalState(false);
                    }}
                />
            )}
        </div>
    );
};
export default UserCard;
