import { Container } from "./style"
import { Button } from "../Button"
import { Link } from "react-router-dom"

export function Section({title, titleButton, iconButton, children}){
    return (
        <Container>
            <div>
                <h2>{title}</h2>
                <div>
                    <Link to="/new"><Button icon={iconButton} title={titleButton}/> </Link>
                </div>
            </div>
            {children}

        </Container>
        
    )
}