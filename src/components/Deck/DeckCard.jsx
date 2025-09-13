import Button from "../Button"

const DeckCard = (props) => {
    return (
        <>
            <tr>
                <td>{props.nome}</td>
                <td>{props.novo}</td>
                <td>{props.aprender}</td>
                <td>{props.revisar}</td>
                <td><Button onClick={props.onOpen} tipo="button" nome="Abrir" variavelBotao="btn btn-primary btn-sm me-2"/></td>
                <td><Button onClick={props.onEdit} tipo="button" nome="Editar" variavelBotao="btn btn-warning btn-sm me-2"/></td>
                <td><Button onClick={props.onDelete} tipo="button" nome="Deletar" variavelBotao="btn btn-danger btn-sm me-2"/></td>
            </tr>
        </>
    )
}

export default DeckCard