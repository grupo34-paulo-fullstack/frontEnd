import { ICard } from "../../App";
import { Container, NameIcon, SpanInfo } from "./style"

function generateColor() {
    const letters = '6789ABCDEF';
    let color = '#';    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }    
    return color;    
}

function Card ( props: {item: ICard} ): JSX.Element {

    return (
        <li>
            <Container>
                <div className="container-image"><img src={props.item.image} alt="" /></div>
                <h5>{props.item.title}</h5>
                <p>{props.item.description}</p>
                <div className="container-name"> 
                    <NameIcon className="container-nameIcon-icon" backgroundColor={generateColor()}>{props.item.name[0]}</NameIcon> {props.item.name}
                </div>
                <div className="container-infos">
                    <SpanInfo>
                        <span>{props.item.km}</span> 
                        <span>{props.item.year}</span>
                    </SpanInfo> 
                    <p>{props.item.price}</p>
                </div>
            </Container>
        </li>
    )
}

export default Card