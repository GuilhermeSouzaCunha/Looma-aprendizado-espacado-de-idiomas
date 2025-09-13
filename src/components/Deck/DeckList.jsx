import DeckCard from "./DeckCard"

const DeckList = ({ decks, onDeleteDeck, onEditDeck, onOpenDeck }) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover shadow-sm">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Baralho</th>
                        <th scope="col">Novo</th>
                        <th scope="col">Aprender</th>
                        <th scope="col">Revisar</th>
                        <th scope="col" colSpan={3}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {decks.map(deck => (
                        <DeckCard
                            key={deck.id}
                            nome={deck.nomeBaralho}
                            novo={deck.novaCarta}
                            aprender={deck.aprenderCarta}
                            revisar={deck.revisarCarta}
                            onDelete={() => onDeleteDeck(deck.id)}
                            onEdit={() => onEditDeck(deck.id)}
                            onOpen={() => onOpenDeck(deck.id)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DeckList