import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { FiLock, FiUser, FiMail} from "react-icons/fi"
import { Link } from "react-router-dom";

export function SignUp(){
    return(
        <Container>
                <Background />
            <Form>

                <h1>Rocketnotes</h1>
                <p>Aplicação para gerenciar e salvar seus links úteis.</p>

                <h2>Crie sua conta</h2>

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
                    placeholder="Senha"
                    type="Password"
                    icon={FiLock}
                />
                <Button title="Entrar" />
                <Link to="/">Voltar para o login</Link>
                
            </Form>

        </Container>
    )
}