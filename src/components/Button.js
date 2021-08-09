const Button = ({ btnClass, btnText, onClick }) => {
    return (
        <button className={btnClass} onClick={onClick}>
            {btnText}
        </button>
    );
};

export default Button;
