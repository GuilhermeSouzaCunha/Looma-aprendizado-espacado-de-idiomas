import Button from "../Button"
import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("usuario")
        navigate("/")
    }

    return (
        <div className="container text-center">
            <nav className="navbar navbar-expand-lg row">
                <div className="container-fluid col-12">
                    <Link className="navbar-brand" to="/" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent">Looma</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link active" to="/docs" aria-current="page" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Documentação</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/forum" aria-current="page" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Fórum</Link>
                            </li>*/ }
                            {
                                usuario ? (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/perfil">Perfil</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Button tipo="button" nome="Sair" variavelBotao="btn btn-primary ms-1" onClick={handleLogout} />
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/logar">Entrar</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Button tipo="button" nome="Cadastrar" variavelBotao="btn btn-primary ms-1" onClick={() => navigate("/registrar")} />
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar