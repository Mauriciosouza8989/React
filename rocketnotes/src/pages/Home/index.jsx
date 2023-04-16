import { Container, Brand, Menu, Search, Content, NewNote } from './style'
import { Header } from '../../components/header'
import { Input} from '../../components/input'
import { ButtonText } from '../../components/buttonText'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Section } from '../../components/section'
import { Note } from '../../components/note'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="Todos" isActive/>
                </li>
                <li>
                    <ButtonText title="React"/>
                </li>
                <li>
                    <ButtonText title="Nodejs"/>
                </li>
                
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{title: 'React', tags:[{id: 1, name:'React'}, {id:2, name:'Rocketseat'}]}}/>
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}