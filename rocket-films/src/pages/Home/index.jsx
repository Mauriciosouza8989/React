import { Container } from "./style"
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"
import { Note } from "../../components/Note"
import { Section } from "../../components/Section"
import { FiPlus,  } from 'react-icons/fi'
import { Stars } from "../../components/Stars"

export function Home(){
    return(
        <Container>
            <Header />
            <Section 
            title="Meus filmes"  
            iconButton={FiPlus}                  
            titleButton="Adicionar filme"
            >

                <Note title="A morte do demônio"
                stars={<Stars size={14} note={5}/>}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ad ipsam minus quo sapiente enim! Aliquid, accusamus hic quidem a amet dolore accusantium facilis incidunt minus atque. Velit, facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ad ipsam minus quo sapiente enim! Aliquid, accusamus hic quidem a amet dolore accusantium facilis incidunt minus atque. Velit, facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ad ipsam minus quo sapiente enim! Aliquid, accusamus hic quidem a amet dolore accusantium facilis incidunt minus atque. Velit, facere?"
                tags={[{id:1, name:"Terror"},{id:2, name:"Suspense"}]}
                />
                <Note title="Pânico"
                stars={<Stars size={14} note={3}/>}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ad ipsam minus quo sapiente enim! Aliquid, accusamus hic quidem a amet dolore accusantium facilis incidunt minus atque. Velit, facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ad ipsam minus quo sapiente enim! Aliquid, accusamus hic quidem a amet dolore accusantium facilis incidunt minus atque. Velit, facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ad ipsam minus quo sapiente enim! Aliquid, accusamus hic quidem a amet dolore accusantium facilis incidunt minus atque. Velit, facere?"
                tags={[{id:1, name:"Terror"},{id:2, name:"Suspense"}, {id:3, name:"Aventura"}]}
                />
                <Note title="Pânico no lago"
                stars={<Stars size={14} note={2}/>}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ad ipsam minus quo sapiente enim! Aliquid, accusamus hic quidem a amet dolore accusantium facilis incidunt minus atque. Velit, facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ad ipsam minus quo sapiente enim! Aliquid, accusamus hic quidem a amet dolore accusantium facilis incidunt minus atque. Velit, facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ad ipsam minus quo sapiente enim! Aliquid, accusamus hic quidem a amet dolore accusantium facilis incidunt minus atque. Velit, facere?"
                tags={[{id:1, name:"Terror"},{id:2, name:"Suspense"}, {id:3, name:"Aventura"}]}
                />

            </Section>
            
            
        </Container>
    )
}