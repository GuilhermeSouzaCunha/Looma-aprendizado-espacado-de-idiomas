import { useState } from "react"
import DeckForm from "../components/Deck/DeckForm"
import DeckList from "../components/Deck/DeckList"
import { useNavigate } from "react-router-dom";

const Deck = () => {
    const navigate = useNavigate()
    const [decks, setDecks] = useState([])

    const handleCreateDeck = (deck) => {
        setDecks([...decks, deck])
        console.log(deck)
    }

    const handleDeleteDeck = (id) => {
        setDecks(decks.filter(deck => deck.id !== id))
    }

    const handleEditDeck = () => {
        pass
    }

    const handleOpenDeck = (id) => {
        navigate(`/carta/${id}`)
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Meus Baralhos</h1>
                <DeckForm onFormDeck={(deck => handleCreateDeck(deck))} />
            </div>
            <DeckList decks={decks} onDeleteDeck={handleDeleteDeck} onEditDeck={handleEditDeck} onOpenDeck={handleOpenDeck} />
        </div>
    )
};

export default Deck