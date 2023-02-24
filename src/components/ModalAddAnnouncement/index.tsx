import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { AddAnnouncementStyle } from "./style";
import { CgClose } from "react-icons/cg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({});

export const ModallAddAnnouncement = () => {
  const { setShowAddAnnouncementModal } = useContext(Context);

  const [addMoreImages, setAddMoreImages] = useState<number[]>([]);
  const [count, setCount] = useState<number>(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <AddAnnouncementStyle>
      <div className="container-modal">
        <div className="header-modal">
          <h4>Criar anúncio</h4>
          <button onClick={() => setShowAddAnnouncementModal(false)}>
            <CgClose />
          </button>
        </div>

        <h5 id="title-type">Tipo de anúncio</h5>
        <div className="type-announcement">
          <button id="option-selected">Venda</button>
          <button id="option-blocked">Leilão</button>
        </div>

        <h5 id="title-form">Informações do veículo</h5>
        <form>
          <label htmlFor="title">Título</label>
          <input id="title" type="text" placeholder="Digitar título" />

          <div className="year-km-price">
            <div className="label-input-year">
              <label htmlFor="year">Ano</label>
              <input id="year" type="text" placeholder="Digitar ano" />
            </div>

            <div className="label-input-km">
              <label htmlFor="km">Quilometragem</label>
              <input id="km" type="text" placeholder="0" />
            </div>

            <div className="label-input-price">
              <label htmlFor="price">Preço</label>
              <input id="price" type="text" placeholder="Digitar preço" />
            </div>
          </div>

          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            placeholder="Digitar descrição"
            rows={4}
            cols={50}
          />

          <h5 id="title-type-vehicle">Tipo de veículo</h5>
          <div className="types-vehicle">
            <input
              {...register("type_vehicle")}
              id="car"
              type="radio"
              value="car"
              name="type-vehicle"
              checked
            />
            <label className="label-car" htmlFor="car">
              Carro
            </label>

            <input
              {...register("type_vehicle")}
              id="motorcycle"
              type="radio"
              value="motorcycle"
              name="type-vehicle"
            />
            <label className="label-motorcycle" htmlFor="motorcycle">
              Moto
            </label>
          </div>

          <label htmlFor="image-principal">Imagem de capa</label>
          <input
            id="image-principal"
            type="text"
            placeholder="Inserir URL da imagem"
          />

          <label htmlFor="first_image_gallery">1ª Imagem da galeria</label>
          <input
            id="first_image_gallery"
            type="text"
            placeholder="Inserir URL da imagem"
          />

          {addMoreImages.map(() => (
            <>
              <label htmlFor="image-one">Imagem da galeria</label>
              <input
                id="image-one"
                type="text"
                placeholder="Inserir URL da imagem"
              />
            </>
          ))}

          <button

            id={addMoreImages.length < 5 ? "add-image-gallery" : "add-image-limit-reached"}
            onClick={(event) => {
              event.preventDefault();
              if (addMoreImages.length < 5) {
                setCount(count + 1);
                setAddMoreImages((old) => [...old, count]);
              }
            }}
          >
            {addMoreImages.length < 5
              ? "Adicionar campo para imagem da galeria"
              : "Máximo de fotos por anúncio atingido"}
          </button>

          <div className="buttons">
            <button
              id="button-cancel"
              onClick={(event) => {
                event.preventDefault();
                setShowAddAnnouncementModal(false);
              }}
            >
              Cancelar
            </button>
            <button id={errors ? "create-announcement-off" : "create-announcement-on"} type="submit">Criar anúncio</button>
          </div>
        </form>
      </div>
    </AddAnnouncementStyle>
  );
};
