import Button from "./Button";

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="header__title">Random User Generator</h1>
            <Button
                btnCtnClass="header__btnCtn"
                btnClass="btnCtn__btn"
                btnText="Get Users"
                onClick={props.fetchData}
            />
        </header>
    );
};

export default Header;
