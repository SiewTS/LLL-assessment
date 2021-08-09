import Button from "./Button";

const Modal = ({ userData, onClick }) => {
    return (
        <div className="modalWindow">
            <div className="modalWindow__modalContent">
                <div className="modalContent__info">
                    <div className="info__contentLeft">
                        <div className="contentLeft__avatar">
                            <img
                                src={userData.picture.large}
                                alt=""
                                className="avatar__img"
                            />
                            <p className="avatar__name">
                                {userData.name.first}
                                <br />
                                {userData.name.last}
                            </p>
                        </div>
                    </div>
                    <div className="info__contentRight">
                        <p className="contentRight__title">User Details</p>

                        <div className="contentRight__details">
                            <p>
                                <div className="details__title">
                                    First Name :
                                </div>
                                <span className="details__desc">
                                    {userData.name.first}
                                </span>
                            </p>
                            <p>
                                <div className="details__title">
                                    Last Name :{" "}
                                </div>
                                <span className="details__desc">
                                    {userData.name.last}
                                </span>
                            </p>
                            <p>
                                <div className="details__title">Gender : </div>
                                <span className="details__desc">
                                    {userData.gender}
                                </span>
                            </p>
                            <p>
                                <div className="details__title">
                                    Date of Birth :{" "}
                                </div>
                                <span className="details__desc">
                                    {new Date(
                                        userData.dob.date
                                    ).toLocaleString()}
                                </span>
                            </p>
                            <p>
                                <div className="details__title">Contact : </div>
                                <span className="details__desc">
                                    {userData.phone}
                                </span>
                            </p>
                            <p>
                                <div className="details__title">Email : </div>
                                <span>{userData.email}</span>
                            </p>
                            <div>
                                <div className="details__title">Address : </div>
                                <span className="details__desc">
                                    {userData.location.street.number +
                                        `, ` +
                                        userData.location.street.name +
                                        `, ` +
                                        userData.location.city +
                                        `, ` +
                                        userData.location.state +
                                        `,` +
                                        userData.location.postcode +
                                        `,` +
                                        userData.location.country}
                                </span>
                            </div>
                            <p>
                                <div className="details__title">
                                    Nationality :{" "}
                                </div>
                                <span className="details__desc">
                                    {userData.nat}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="modalContent__closeBtn">
                    <Button
                        btnClass="closeBtn__btn"
                        btnText="close"
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
