import { Container, Profile, Search } from "./style"
import { Input } from "../Input"
import { Link } from "react-router-dom"

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Search>
                <Input type="text" placeholder="Pesquise pelo título"/>
            </Search>
            <Profile>
                <div>
                    <Link to="/profile">
                        <p>Maurício Sousa</p>
                    </Link>
                    
                    <Link to="/login">Sair</Link>
                </div>

                <Link to="/profile">
                    <img src="https://github.com/Mauriciosouza8989.png" alt="imagem do usuário" />
                </Link>
            </Profile>
        </Container>
    )
}