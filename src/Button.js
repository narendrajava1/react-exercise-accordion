function Button({classVar,children,onClick}) {
    return (
            <button className={`btn ${classVar}`} onClick={onClick}>{children}</button>
    );
}

export default Button;