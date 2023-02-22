import { Container, NameIcon, SpanInfo } from "./style"

export interface ICard {
    image: string;
    title: string;
    description: string;
    name: string;
    km: string;
    year: string;
    price: string;
  }

function generateColor() {
    const letters = '6789ABCDEF';
    let color = '#';    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }    
    return color;    
}

export const Card = ( props: {item: ICard} ): JSX.Element => {


    // For teste card

    // const data = {
    //     image: 'https://uploaddeimagens.com.br/images/004/354/094/full/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview_1.png?1676409884',
    //     title: 'Product title stays here - max 1 line',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    //     name: 'Regina',
    //     km: '50.156 KM',
    //     year: '2019',
    //     price: 'R$ 10.541,56'
    //   } 

    return (
        <Container>
            <div className="container-image"><img src={props.item.image} alt="" /></div>
            <h5>{props.item.title}</h5>
            <p className="text-body-2-400">{props.item.description}</p>
            <div className="container-name text-body-1-400"> 
                <NameIcon className="container-nameIcon-icon text-body-2-400" backgroundColor={generateColor()}>{props.item.name[0]}</NameIcon> {props.item.name}
            </div>
            <div className="container-infos">
                <SpanInfo>
                    <span className="text-body-2-500">{props.item.km}</span> 
                    <span className="text-body-2-500">{props.item.year}</span>
                </SpanInfo> 
                <p className="text-body-1-400">{props.item.price}</p>
            </div>
        </Container>
    )
}
