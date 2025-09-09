const FeaturesSection = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-6">Benefícios da Looma</h2>
                    <p className="lead text-muted">
                        Conheça alguns dos principais recursos que tornam a Looma única
                    </p>
                </div>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4 border-0 shadow-sm">
                            <i className="bi bi-lightning-charge-fill fs-1 text-primary"></i>
                            <h5 className="mt-3 fw-semibold">Aprendizado Acelerado</h5>
                            <p className="text-muted">
                                Memorize conteúdos com a técnica de repetição espaçada de forma simples e eficaz.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4 border-0 shadow-sm">
                            <i className="bi bi-cloud-arrow-down-fill fs-1 text-success"></i>
                            <h5 className="mt-3 fw-semibold">Acesso em Qualquer Lugar</h5>
                            <p className="text-muted">
                                Sincronize seus flashcards na nuvem e estude em múltiplos dispositivos.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4 border-0 shadow-sm">
                            <i className="bi bi-bar-chart-fill fs-1 text-warning"></i>
                            <h5 className="mt-3 fw-semibold">Progresso Mensurável</h5>
                            <p className="text-muted">
                                Acompanhe suas estatísticas e veja como sua memória melhora com o tempo.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4 border-0 shadow-sm">
                            <i className="bi bi-people-fill fs-1 text-danger"></i>
                            <h5 className="mt-3 fw-semibold">Aprendizado Colaborativo</h5>
                            <p className="text-muted">
                                Compartilhe e descubra decks criados por outros usuários da comunidade.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4 border-0 shadow-sm">
                            <i className="bi bi-phone-fill fs-1 text-info"></i>
                            <h5 className="mt-3 fw-semibold">Interface Intuitiva</h5>
                            <p className="text-muted">
                                Design moderno e simples que deixa sua experiência de estudo muito mais prática.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 text-center p-4 border-0 shadow-sm">
                            <i className="bi bi-shield-check fs-1 text-primary"></i>
                            <h5 className="mt-3 fw-semibold">Segurança Garantida</h5>
                            <p className="text-muted">
                                Seus dados e progressos ficam protegidos com criptografia e backups automáticos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection