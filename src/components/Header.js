import Button from "./Button";

const Header = ({ fetchData }) => {
    return (
        <header className="header">
            <h1 className="header__title">Random User Generator</h1>
            <div className="header__btnCtn">
                <Button
                    btnClass="btnCtn__btn"
                    btnText="Get Users"
                    onClick={fetchData}
                />
            </div>
        </header>
    );
};

export default Header;
