import { IComment } from "../../interfaces/components";
import { Container } from "./styles"



export const CardComments = ({description, createdAt, user}: IComment) => {  

    const minutesAgo = () => {
        const time = new Date(createdAt).getTime()
        const now = new Date().getTime()

        const minutes = Number((now - time)/ (1000 * 60))

        if(minutes > 1440) return `há ${minutes/1440} dias`
        if(minutes < 1440 && minutes > 120) return `há ${Math.floor(minutes/60)} horas`
        if(minutes < 120 && minutes >= 60) return `há ${Math.floor(minutes/60)} hora`
        if(minutes < 60 && minutes >= 2) return `há ${Math.floor(minutes)} minutos`
        if(minutes < 2 && minutes > 1) return `há ${Math.floor(minutes)} minuto`
        if(minutes < 1 ) return `há segundos`
    }

    return (
        <Container >
            <div className="userInfo">
                <span className="userBall">{user.name.split(' ').map((name:string, index:number)=> index <= 1 ? name[0].toUpperCase() : undefined)}</span>{" "}
                <p className="name">{user.name}</p>{" "}
                <div className="userDot"></div>{" "}
                <span className="postedDate">{minutesAgo()}</span>{" "}
            </div>
            <p className="userComment">
                {description}
            </p>
        </Container>
    )
}