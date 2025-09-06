const Button = ({variant = "primary", ...props}) => {
    return (
        <section>
            <button tipo={props.type} className={`btn btn-${variant}`}>{props.nome}</button>
        </section>
    )
}

export default Button