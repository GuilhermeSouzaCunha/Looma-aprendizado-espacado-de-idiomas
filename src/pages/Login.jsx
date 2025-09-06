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

        const usuario = JSON.parse(localStorage.getItem("usuario"))
        if (!usuario || !(usuario.email === email) || !(usuario.senha === senha)) {
            alert("Usuário não existe")
            return
        }

        evento.preventDefault()
        setEmail("")
        setSenha("")

        navigate("/")
    }

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <form className="col-3" onSubmit={handleSubmit}>
                <h2 className="mb-4">Login</h2>
                <div className="mb-3">
                    <TextField 
                        nome="E-mail" 
                        tipo="email" 
                        valor={email} 
                        ehObrigatorio={true} 
                        legenda="Digite seu e-mail" 
                        onChange={(evento) => setEmail(evento.target.value)} 
                        variavelLabel="form-label" 
                        variavelInput="form-control" 
                    />
                </div>
                <div className="mb-3">
                    <TextField 
                        nome="Senha" 
                        tipo="password" 
                        valor={senha} 
                        ehObrigatorio={true} 
                        legenda="Digite sua senha" 
                        onChange={(evento) => setSenha(evento.target.value)} 
                        variavelLabel="form-label" 
                        variavelInput="form-control"
                    />
                </div>
                <div className="mb-3">
                    <Button 
                        tipo="submit" 
                        nome="Logar" 
                        variavelBotao="btn btn-primary" 
                    />
                </div>
                <div className="mb-3">
                    <Button 
                        tipo="button" 
                        nome="Inscreva-se" 
                        variavelBotao="btn btn-outline-secondary" 
                        onClick={() => navigate("/registrar")} 
                    />
                </div>
                <a href="/recuperarsenha" className="link-primary">Esqueceu a senha?</a>
            </form>
        </div>
    )
}

export default Login