import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import {
  MainContent,
  Body,
  Aside,
  BoxImgCarInfoDescription,
  CarSection,
  Comments,
  CommentSection,
  CommentsBox,
  BoxComment,
  CommentsFixed,
  CommentSectionOffline,
} from "./style";
import { CardComments } from "../../components/CardComments";
import { LegacyRef, useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../service/api";
import { IComment } from "../../interfaces/components";
import { IAnnouncementResponse } from "../../interfaces/context";
import { Button } from "../../components/Button";
import { toast } from "react-hot-toast";
import { ModalImageCar } from "../../components/ModalImageCar";


export const AdPage = () => {

  const [modalImageCar, setModalImageCar] = useState(false)
  const [imageRender, setImageRender] = useState("")

  const textAreaRef = useRef<any>(null)
  const { user } = useContext(AuthContext)
  const [comments, setComments] = useState<IComment[]>([])
  const navigate = useNavigate()
  const [announcement, setAnnouncement] = useState<IAnnouncementResponse>({} as IAnnouncementResponse)

  const { announcementId } = useParams();


  useEffect( ()=> {
    const getAnnouncementsAndComments = async () => {
      // const comments = await api.get(`/comments/${announcementId}`)
      const comments = await api.get(`/comments/8ad1780f-27bf-4bab-815c-ad1e21c371c3`)
      setComments(comments.data)
      console.log(comments.data)
      const announcement = await api.get(`/announcements`)
      const announcementOpen = announcement.data.filter((announc: IAnnouncementResponse) => announc.id == "2207e3b5-7205-44d9-9400-83e0f1eff9ae")
      setAnnouncement(announcementOpen[0])
      console.log(announcementOpen[0])
    }

    getAnnouncementsAndComments()
      .catch(err => alert(err))
  }, [])

  const modalAndImageRender = (image: string) => {
    setModalImageCar(!modalImageCar) 
    setImageRender(image)
  }

  const createComment = async () => {
   try{
    const data = {description: textAreaRef.current.value}
    await api.post(`/comments/8ad1780f-27bf-4bab-815c-ad1e21c371c3`, data)

    const comments = await api.get(`/comments/8ad1780f-27bf-4bab-815c-ad1e21c371c3`)
    setComments(comments.data)

  } catch {
    toast.error("Não foi possível fazer o comentário")
  } 
  }
  
  return (
    <>
      <Header />
      <Body>
        <MainContent>
          <BoxImgCarInfoDescription>
            <figure>
              <img src={announcement.image} alt="Foto Principal" />
            </figure>
            <CarSection>
              <h6>{announcement.title}</h6>
              <div className="carInfoBox">
                <div className="yearAndKmBox">
                  <span className="yearKm">{announcement.year}</span>
                  <span className="yearKm">{announcement.km} km</span>
                </div>

                <p className="price">R$ {announcement.price}</p>
              </div>

              <Button color="var(--colors-white)" outline_color="var(--colors-brand-3)" children="Comprar" background_hover="var(--colors-brand-1)" color_hover="var(--colors-white)" outline_hover="var(--colors-brand-1)" width="100px" height="38px" background="var(--colors-brand-1)" />
            </CarSection>
            <section className="description">
              <h6>Descrição</h6>
              <p>
                {announcement.description}
              </p>
            </section>
          </BoxImgCarInfoDescription>

          <Aside>
            <section className="photoSection">
              <h6>Fotos</h6>
              <ul className="photoList">
                {announcement.gallery &&
                  announcement.gallery.map((item, index)=> {
                    return(
                      <>
                        <li key={index} className="photoElement" onClick={()=> modalAndImageRender(item.image)}>
                          <img
                            className="asideImg"
                            src={item.image}
                            alt="Fotos Galeria"
                          />
                        </li>
                      </>
                    )
                  })
                }
              </ul>
              {
                modalImageCar &&
                <ModalImageCar image={imageRender} setModalImageCar={setModalImageCar} modalImageCar={modalImageCar}/>
              }
            </section>
            <section className="userSection">
              <div className="userTag">{announcement.user?.name.split(' ').map((name, index)=> index <= 1 ? name[0].toUpperCase() : undefined)}</div>
              <span className="userName">{announcement.user?.name}</span>
              <p className="userDescription">
                {announcement.user?.description}
              </p>
              <button className="userAds">Ver todos anuncios</button>
            </section>
          </Aside>
        </MainContent>

        <CommentsBox>
          <Comments>
            <h6>Comentários</h6>

            <ul className="commentList">
              {
              
               comments && comments.map((comment, index)=> <CardComments key={index} description={comment.description} createdAt={comment.createdAt} user={comment.user}/>)
              }
              
            </ul>
          </Comments>

            {
              user?
              <CommentSection>
                <div className="userInfoComment">
                  <span className="userBallComment">{user.name.split(' ').map((name, index)=> index <= 1 ? name[0].toUpperCase() : undefined)}</span>{" "}
                  <p className="nameComment">{user.name}</p>{" "}
                </div>

                <textarea ref={textAreaRef} placeholder="Carro muito confortável, foi uma ótima experiência de compra..."></textarea>
                <button onClick={()=>createComment()} >Comentar</button>
                <div className="comments-fixed">
                  <CommentsFixed onClick={()=> {textAreaRef.current.value="Gostei muito!"}}>Gostei muito!</CommentsFixed>
                  <CommentsFixed onClick={()=> {textAreaRef.current.value="Incrível"}}>Incrível</CommentsFixed>
                  <CommentsFixed onClick={()=> {textAreaRef.current.value="Recomendarei para meus amigos!"}}>Recomendarei para meus amigos!</CommentsFixed>
                </div>
                
              </CommentSection>
              :
              <CommentSectionOffline>
                <textarea ref={textAreaRef} placeholder="Carro muito confortável, foi uma ótima experiência de compra..."></textarea>
                <button onClick={()=> navigate("/login", {replace: true})} >Comentar</button>
                <div className="comments-fixed">
                  <CommentsFixed onClick={()=> {textAreaRef.current.value="Gostei muito!"}}>Gostei muito!</CommentsFixed>
                  <CommentsFixed onClick={()=> {textAreaRef.current.value="Incrível"}}>Incrível</CommentsFixed>
                  <CommentsFixed onClick={()=> {textAreaRef.current.value="Recomendarei para meus amigos!"}}>Recomendarei para meus amigos!</CommentsFixed>
                </div>
                
              </CommentSectionOffline>
            }
        </CommentsBox>
      </Body>
      <Footer />
    </>
  );
};
