import { Container, Header, Form, Avatar } from "./style"
import { Link } from "react-router-dom"
import {FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

let BackgroundImg = 'https://github.com/Mauriciosouza8989.png'


export function Profile(){
    return (
        <Container>
            <Header>
                <Link to="/"> <FiArrowLeft /> Voltar</Link>
            </Header>

            <Form>
                <Avatar>
                    <img src={BackgroundImg} alt="imagem do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />
                            <input
                                id="avatar" type="file"
                            />
                    </label>
                </Avatar>
                <Input icon={FiUser} type="text" placeholder="Nome" />
                <Input icon={FiMail} type="email" placeholder="E-mail" />
                <Input icon={FiLock} type="password" placeholder="Senha atual"/>
                <Input icon={FiLock} type="password" placeholder="Nova senha" />

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}