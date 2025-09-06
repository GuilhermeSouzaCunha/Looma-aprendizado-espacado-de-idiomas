import "./TextField.css"

const TextField = ({variavelLabel = "", variavelInput = "", ...props}) => {
    return (
        <section>
            <label className={`${variavelLabel}`}>{props.nome}</label>
            <input className={`${variavelInput}`} onChange={props.onChange} type={props.tipo} value={props.valor} required={props.ehObrigatorio} placeholder={props.legenda} />
        </section>
    )
}

export default TextField