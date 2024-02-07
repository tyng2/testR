
function Button({text, onclickFn}) {
    // console.log(text);
    return (
        <button type="button" onClick={onclickFn} className="btn">{text}</button>
    );
}

export default Button;