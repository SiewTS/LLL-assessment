import Button from "./Button";

const Goto = ({
    goToCtnClass,
    goToLabelClass,
    goToInputClass,
    goToBtnCtnClass,
    goToBtnClass,
    goToBtnText,
    handleChange,
    handleInput,
}) => {
    return (
        <div className={goToCtnClass}>
            <label className={goToLabelClass} htmlFor="pageNum">
                Go to{" "}
            </label>
            <input
                type="number"
                name="pageNum"
                className={goToInputClass}
                id="pageNum"
                placeholder="page"
                onChange={handleChange}
            />
            <div className="goToBtnCtnClass">
                <Button
                    btnClass={goToBtnClass}
                    btnText={goToBtnText}
                    onClick={handleInput}
                />
            </div>
        </div>
    );
};

export default Goto;
