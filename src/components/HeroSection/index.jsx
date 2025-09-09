import Button from "../Button"
import { useNavigate } from "react-router-dom"

const HeroSection = () => {
    const navigate = useNavigate()

    return (
        <section 
            className="d-flex align-items-center"
            style={{ minHeight: "60vh" }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-start">
                        <p className="text-primary fw-semibold mb-2">Crescer é mais natural com Looma.</p>
                        <h1 className="display-3 fw-bold mb-3">
                            Bem-vindo ao <span className="text-primary">Looma</span>.
                        </h1>
                        <p className="lead mb-4">
                            O Looma é um site de flashcards com técnica de <strong>aprendizado espaçado</strong>, 
                            que ajuda você a memorizar conteúdos de idiomas de forma mais rápida e eficiente.
                        </p>
                        <div className="d-flex gap-3">
                            <Button 
                                nome="Cadastrar" 
                                tipo="button" 
                                variavelBotao="btn btn-primary btn-lg shadow" 
                                onClick={() => navigate("/registrar")} 
                            />
                            <Button 
                                nome="Saiba Mais" 
                                tipo="button" 
                                variavelBotao="btn btn-outline-secondary btn-lg" 
                                onClick={() => navigate("/sobre")} 
                            />
                        </div>
                    </div>

                    {/* <div className="col-md-6 text-center">
                        <img 
                            src="" 
                            alt="Logo Looma" 
                            className="img-fluid" 
                            style={{ maxHeight: "400px" }}
                        />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
