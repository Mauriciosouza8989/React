import {Container, Links} from './styles.js'
import {Header} from '../../components/header'
import { Section } from '../../components/section/index.jsx'
import {Button} from '../../components/button'
import {Tag} from '../../components/tag'
import { ButtonText } from '../../components/buttonText/index.jsx'
import { Content } from './styles.js'


export function Details(){
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>Introdução aoReact</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque tempora id quis alias aspernatur, repellendus quisquam suscipit quod, vero, placeat omnis a debitis. Nostrum accusantium corporis cum alias doloremque a.</p>

          <Section title="Links uteis">
            <Links>
                <li><a href="#">http://react-icons.github.io/react-icons</a></li>
                <li><a href="#">https://www.google.com/search?client=firefox-b-d&q=folmes+de+terror+para+#wxpd=browse:true</a></li>
                <li><a href="#">http://react-icons.github.io/react-icons</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Node"/>
            <Tag title="React"/>
            <Tag title="Javascript"/>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}