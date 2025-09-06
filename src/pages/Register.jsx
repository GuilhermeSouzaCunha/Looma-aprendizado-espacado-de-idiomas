import Button from "../components/Button";
import TextField from "../components/TextField"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaRepetir, setSenhaRepetir] = useState('')

    const handleSubmit = (evento) => {
        if (!(senha === senhaRepetir)) {
            alert("Senhas não são iguais")
            return
        }

        if (!nome || !email || !senha || !senhaRepetir) {
            alert("Preencha todos os campos")
        }

        evento.preventDefault()
        console.log(email)

        setNome("")
        setEmail("")
        setSenha("")
        setSenhaRepetir("")

        navigate("/")
    }

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="col-3">
                <h1 className="">Inscrever-se</h1>
                <div className="mb-3">
                    <TextField tipo="text" valor={nome} ehObrigatorio={true} nome="Nome" legenda="Digite seu nome. Ex.: João" onChange={(e) => setNome(e.target.value)} variantLabel="form-label" variantInput="form-control" />
                </div>
                <div className="mb-3">
                    <TextField tipo="email" valor={email} ehObrigatorio={true} nome="E-mail" legenda="Digite seu e-mail. Ex.: joao123@gmail.com" onChange={(e) => setEmail(e.target.value)} variantLabel="form-label" variantInput="form-control" />
                </div>
                <div className="mb-3">
                    <TextField tipo="password" valor={senha} ehObrigatorio={true} nome="Senha" legenda="Digite sua senha. Ex.: Aa123!" onChange={(e) => setSenha(e.target.value)} variantLabel="form-label" variantInput="form-control" />
                </div>
                <div className="mb-3">
                    <TextField tipo="password" valor={senhaRepetir} ehObrigatorio={true} nome="Senha novamente" legenda="Repita sua senha. Ex.: Aa123!" onChange={(e) => setSenhaRepetir(e.target.value)} variantLabel="form-label" variantInput="form-control" />
                </div>
                <div className="mb-3">
                    <Button nome="Cadastrar" tipo="submit" variant="primary" />
                </div>
                <div className="mb-3">
                    <Button nome="Logar" tipo="submit" variant="outline-secondary" />
                </div>
            </form>
        </div>
    )
}

export default Register