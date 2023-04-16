import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { FiLock, FiMail} from "react-icons/fi"
import { Link } from "react-router-dom";


export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rocketnotes</h1>
                <p>Aplicação para gerenciar e salvar seus links úteis.</p>

                <h2>Faça seu login</h2>

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
                <Link to="/register">Criar conta</Link>
                
            </Form>

            <Background />
        </Container>
    )
}