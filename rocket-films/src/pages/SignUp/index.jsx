import { Container, Form, Background } from "./style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import {FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/fi"
import { Link } from "react-router-dom"

export function SignUp(){
    return(
        <Container>
            <Background />
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua <span>Conta</span></h2>

                <Input icon={FiUser} type="text" placeholder="Nome" />
                <Input icon={FiMail} type="email" placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Password"/>
        
                <Button title="Criar conta"/>
                <Link to="/"><FiArrowLeft /> Voltar para o login</Link>
            </Form>
            
        </Container>
    )
}