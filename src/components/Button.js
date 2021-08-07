const Button = (props) => {
    return (
        <div className={props.btnCtnClass}>
            <button className={props.btnClass} onClick={props.onClick}>
                {props.btnText}
            </button>
        </div>
    );
};

export default Button;
