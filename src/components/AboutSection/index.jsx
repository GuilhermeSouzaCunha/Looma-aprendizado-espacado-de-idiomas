const AboutSection = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-5">Sobre a Looma</h2>
                    <p className="lead text-muted">Conheça nossa história e propósito</p>
                </div>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h3 className="h5 fw-bold mb-3">Contexto Geral</h3>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                                    voluptates corrupti consectetur commodi maiores placeat assumenda
                                    dicta blanditiis minima soluta.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h3 className="h5 fw-bold mb-3">Fundação</h3>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                    itaque corrupti pariatur maiores dignissimos, maxime nobis rerum
                                    reiciendis dicta commodi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h3 className="h5 fw-bold mb-3">Missão</h3>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                                    provident itaque quia soluta necessitatibus. Molestias doloremque
                                    dolorum fugiat mollitia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
