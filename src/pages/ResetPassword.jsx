import Button from "../components/Button"
import TextField from "../components/TextField"
import { useState } from "react"

const ResetPassword = () => {
    const [codigo, setCodigo] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaRepetida, setSenhaRepetida] = useState('')

    const handleSubmit = (evento) => {
        evento.preventDefault()
        setCodigo("")
        setSenha("")
        setSenhaRepetida("")
    }

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <form className="col-3" onSubmit={handleSubmit}>
                <h2>Redefinir senha</h2>
                <div className="mb-3">
                    <TextField
                        nome="Código"
                        tipo="text"
                        valor={codigo}
                        ehObrigatorio={true}
                        legenda="Digite o código enviado"
                        onChange={(evento) => setCodigo(evento.target.value)}
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
                        legenda="Digite sua nova senha"
                        onChange={(evento) => setSenha(evento.target.value)}
                        variavelLabel="form-label"
                        variavelInput="form-control"
                    />
                </div>
                <div className="mb-3">
                    <TextField
                        nome="Repita sua senha"
                        tipo="password"
                        valor={senhaRepetida}
                        ehObrigatorio={true}
                        legenda="Digite sua senha novamente"
                        onChange={(evento) => setSenhaRepetida(evento.target.value)}
                        variavelLabel="form-label"
                        variavelInput="form-control"
                    />
                </div>
                <div className="mb-3">
                    <Button 
                        nome="Redefinir"
                        tipo="submit"
                        variavelBotao="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}

export default ResetPassword