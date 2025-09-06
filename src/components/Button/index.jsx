const Button = ({variavelBotao = "", ...props}) => {
    return (
        <section>
            <button type={props.tipo} className={`${variavelBotao}`} onClick={props.onClick}>{props.nome}</button>
        </section>
    )
}

export default Button