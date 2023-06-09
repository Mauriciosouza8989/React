import { Container, Form, Avatar } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import {FiUser, FiLock, FiMail, FiArrowLeft, FiCamera} from "react-icons/fi"
import { Link } from "react-router-dom";

let BackgroundImg = 'https://github.com/Mauriciosouza8989.png'

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>


            <Form>
                <Avatar>
                    <img src={BackgroundImg} alt="Imagem do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />
                            <input
                                id="avatar" type="file"
                            />
                    </label>
                </Avatar>
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input 
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />
                
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />
                
                <Button title="Salvar"/>
               
            </Form>
        </Container>
    )
}