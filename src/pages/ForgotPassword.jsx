import Button from '../components/Button'
import TextField from '../components/TextField'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const handleSubmit = (evento) => {
        const usuario = JSON.parse(localStorage.getItem("usuario"))
        if (!usuario || !(usuario.email === email)) {
            alert("E-mail não preechido ou usuário não existe.")
            return
        }

        navigate("/redefinirsenha")
        
        evento.preventDefault()
        console.log(email)
        setEmail("")
    }

    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <form className="col-3" onSubmit={handleSubmit}>
                <h2 className="mb-4">Recuperar senha</h2>
                <div className='mb-3'>
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
                <div className='mb-3'>
                    <Button
                        nome="Recuperar senha"
                        tipo="submit"
                        variavelBotao="btn btn-primary"
                    />
                </div>
                <div className='mb-3'>
                    <Button 
                        tipo="button" 
                        nome="Voltar" 
                        variavelBotao="btn btn-outline-secondary" 
                        onClick={() => navigate("/logar")} 
                    />
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword