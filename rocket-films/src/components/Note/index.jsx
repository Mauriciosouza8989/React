import { Container } from "./style"
import { Tag } from "../Tag"



export function Note(data, ...rest){
    return(
        <Container>
            <h2>{data.title}</h2>
            {data.stars}
            <p>{data.description}</p>
            {
                data.tags&&  data.tags.map((tag, id)=> <Tag key={id} title={tag.name}/>)
                    
            }
        </Container>
        
    )
}