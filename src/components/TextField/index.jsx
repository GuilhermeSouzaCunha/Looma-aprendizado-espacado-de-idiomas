import "./TextField.css"

const TextField = ({variantLabel = "", variantInput = "", ...props}) => {
    return (
        <section>
            <label className={`${variantLabel}`}>{props.nome}</label>
            <input className={`${variantInput}`} onChange={props.onChange} type={props.tipo} value={props.valor} required={props.ehObrigatorio} placeholder={props.legenda} />
        </section>
    )
}

export default TextField