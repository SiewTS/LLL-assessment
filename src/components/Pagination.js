import { useState } from "react";
import Button from "./Button";
import Goto from "./Goto";

const Pagination = ({
    usersPerPage,
    totalUsers,
    currentPage,
    paginate,
    prevPage,
    nextPage,
}) => {
    const pageNumbers = [];
    const [inputVal, setInVal] = useState(null);
    const [inputErr, setInputErr] = useState(false);

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleChange = (e) => {
        setInVal(Number(e.target.value));
    };

    const handleInput = () => {
        if (inputVal <= pageNumbers.length && inputVal >= 1) {
            paginate(inputVal);
            setInputErr(false);
        } else {
            setInputErr(true);
        }
    };

    return (
        <nav className="cardSection__navBar">
            <div className="navBar__btnCtn">
                <Button
                    btnClass="btnCtn__navBtn"
                    btnText="prev"
                    onClick={prevPage}
                />
                <Button
                    btnClass="btnCtn__navBtn"
                    btnText="next"
                    onClick={nextPage}
                />
            </div>
            <ul className="navBar__pagination">
                {pageNumbers.map((number) => {
                    return (
                        <li
                            key={number}
                            className={
                                currentPage === number
                                    ? "pagination__item pagination__item--active"
                                    : "pagination__item pagination__item--inactive"
                            }
                            onClick={() => {
                                paginate(number);
                            }}
                        >
                            {number}
                        </li>
                    );
                })}
            </ul>

            <Goto
                goToCtnClass="navBar__goto"
                goToLabelClass="goto__label"
                goToInputClass="goto__input"
                goToBtnCtnClass="goto__btn"
                goToBtnClass="btn__goBtn"
                goToBtnText="Go >"
                handleChange={handleChange}
                handleInput={handleInput}
            />
            {inputErr ? (
                <div className="navBar__errMsg">Input is invalid!</div>
            ) : (
                ""
            )}
        </nav>
    );
};

export default Pagination;
