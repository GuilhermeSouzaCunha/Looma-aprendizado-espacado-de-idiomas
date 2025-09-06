import TextField from "../components/TextField"
import Button from "../components/Button"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (evento) => {
        if (!senha || !email) {
            alert("E-mail e senha são obrigatórios.")
            return
        }

        evento.preventDefault()
        console.log(senha)

        setEmail("")
        setSenha("")

        navigate("/")
    }

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <form className="col-3" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="mb-3">
                    <TextField nome="E-mail" tipo="text" valor={email} ehObrigatorio={true} legenda="Digite seu e-mail" onChange={(evento) => setEmail(evento.target.value)} variantLabel="form-label" variantInput="form-control" />
                </div>
                <div className="mb-3">
                    <TextField nome="Senha" tipo="text" valor={senha} ehObrigatorio={true} legenda="Digite seu e-mail" onChange={(evento) => setSenha(evento.target.value)} variantLabel="form-label" variantInput="form-control" />
                </div>
                <div className="mb-3">
                    <Button tipo="submit" nome="Logar" variant="primary" />
                </div>
                <div className="mb-3">
                    <Button tipo="submit" nome="Cadastrar" variant="outline-secondary" />
                </div>
                <a href="#" className="link-primary">Esqueceu a senha?</a>
            </form>
        </div>
    )
}

export default Login