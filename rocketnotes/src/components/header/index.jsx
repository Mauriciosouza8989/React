import { Container, Profile } from "./style"
import { RiShutDownLine} from "react-icons/ri"
import { Logout } from "./style"

export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/Mauriciosouza8989.png" alt="imagem do usuario" />
                <div>
                    <span>Bem vindo</span>
                    <strong>Maurício Sousa</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}