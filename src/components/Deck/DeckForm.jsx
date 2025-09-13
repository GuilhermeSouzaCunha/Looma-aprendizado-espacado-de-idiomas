import { useState } from 'react'
import Modal from '../Modal'
import Button from '../Button'
import TextField from '../TextField'

const DeckForm = ({ onFormDeck }) => {
    const [openModal, setOpenModal] = useState(false)
    const [nomeBaralho, setNomeBaralho] = useState("")
    const [novaCarta, setNovaCarta] = useState(0)
    const [aprenderCarta, setAprenderCarta] = useState(0)
    const [revisarCarta, setRevisarCarta] = useState(0)

    const handleSubmit = (evento) => {
        onFormDeck({ id: Date.now(), nomeBaralho, novaCarta, aprenderCarta, revisarCarta })
        evento.preventDefault()
        close()
    }

    const close = () => {
        setOpenModal(!openModal)
    }

    return (
        <div>
            <div>
                <Button nome="Criar baralho" tipo="button" onClick={(() => setOpenModal(true))} variavelBotao="btn btn-primary" />
            </div>
            <Modal isOpen={openModal} >
                <form onSubmit={handleSubmit}>
                    <TextField nome="Nome" value={nomeBaralho} tipo="text" variavelLabel="form-label" variavelInput="form-control" onChange={(evento) => setNomeBaralho(evento.target.value)} ehObrigatorio={true} legenda="Digite o nome do seu baralho" />
                    <div className='d-flex mt-2'>
                        <Button nome="Criar" tipo="submit" variavelBotao="btn btn-primary" />
                        <Button nome="Fechar" tipo="button" variavelBotao="btn btn-secondary ms-1" onClick={() => close()} />
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default DeckForm