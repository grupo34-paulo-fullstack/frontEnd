import { useEffect, useRef, useState } from "react"
import { Model, Container } from "./styles"

interface IModalImageCar {
    modalImageCar: boolean , 
    setModalImageCar: (prev: boolean) => void, 
    image: string
}

export const ModalImageCar = ({modalImageCar, setModalImageCar, image}: IModalImageCar) => {

    const modalRef = useRef<HTMLInputElement>(null)

    const handleModal = () => {
        setModalImageCar(!modalImageCar)
    }

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
          if (
            modalImageCar &&
            modalRef.current &&
            !modalRef.current.contains(e.target)
          ) {
            setModalImageCar(false);
          }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside);
        };
      }, [modalImageCar]);

    return (
        <Model>
            <Container ref={modalRef}>
                <h6>Imagem do veículo</h6>
                    <img src="" alt="" />
            </Container>
        </Model>
    )
}