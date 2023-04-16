import { Container } from "./style"
import {AiFillStar, AiOutlineStar} from "react-icons/ai"

export function Stars({size, note, stars,cleanStar, ...rest}){
    if(note){
        stars = []
        for(let i= 0; i< 5; i++){
            if(i < note){
                stars.push(<AiFillStar key={i} size={size}/>)
            }else{
                stars.push(<AiOutlineStar key={i} size={size}/>)
            }

        }
    }
    return(
        <Container>
            {
                stars.map(star=> star )
            }

        </Container>
    )
}