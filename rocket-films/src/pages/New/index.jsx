import { Container, Form, Section } from "./style"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button} from "../../components/Button"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Link } from "react-router-dom"
import { FiArrowLeft, FiPlus } from "react-icons/fi"

export function New({ isNew = false }) {
    return(
        <Container>
            <Header />
            <Form>
                <Link to="/"><FiArrowLeft />  Voltar</Link>
                <h1>Novo filme</h1>
                <div>
                    <Input type="text" placeholder="Nome"/>
                    <Input type="text" placeholder="Sua nota (de 0 a 5)"/>
                </div>
                <Textarea placeholder="Observações"/>
                <Section>
                    <p>Marcadores</p>
                    <div>
                    <NoteItem value="Terror"/>
                    <NoteItem value="Suspense"/>
                    <NoteItem value="Ação"/>
                    <NoteItem placeholder="Nova categoria" isnew/>
                    </div>
                </Section>
                    <div className="buttons">
                        <Button title="Excluir filme" />
                        <Button title="Salvar filme" />
                    </div>
            </Form>
        </Container>
    )
}