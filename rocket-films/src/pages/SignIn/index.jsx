import { Container, Form, Background } from "./style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import {FiMail, FiLock} from "react-icons/fi"
import { Link } from "react-router-dom"

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu <span>Login</span></h2>

                <Input icon={FiMail} type="email" placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Password"/>
                <Button title="Entrar"/>
                <Link to="/subscrible">Criar conta</Link>
            </Form>
            <Background />
        </Container>
    )
}