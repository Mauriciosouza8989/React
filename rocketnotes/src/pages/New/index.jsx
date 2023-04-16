import { Container, Form } from "./style"
import { Header } from "../../components/header"
import { Input }from "../../components/input"
import { TextArea }from "../../components/TextArea"
import { Button }from "../../components/button"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/section"



export function New(){
    return(
        <Container>
            <Header />
            <main>
                <Form> 
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações"/>
                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem isNew placeholder="Novo link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder="Novo link"/>
                        </div>
                    </Section>
                <Button title="Salvar"/>
                </Form>
            </main>

        </Container>
    )
}