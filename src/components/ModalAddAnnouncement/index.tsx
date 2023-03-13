import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { AddAnnouncementStyle } from "./style";
import { CgClose } from "react-icons/cg";
import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormCreateAnnouncement } from "../../interfaces/components";

const schema = yup.object().shape({
  title: yup.string().required("Este campo é obrigatório"),
  year: yup
    .number()
    .typeError("Apenas números")
    .min(1970, "Acima de 1970")
    .required("Este campo é obrigatório"),
  km: yup
    .number()
    .typeError("Apenas números")
    .min(0, "Inválido")
    .required("Este campo é obrigatório"),
  price: yup
    .number()
    .typeError("Apenas números")
    .min(1, "Inválido")
    .required("Este campo é obrigatório"),
  description: yup.string().required("Este campo é obrigatório"),
  type_vehicle: yup.string().required("Este campo é obrigatório"),
  image: yup.string().required("Este campo é obrigatório"),
  first_photo_gallery: yup.string().required("Este campo é obrigatório"),
  photos_gallery: yup.array(yup.string()).ensure(),
});

export const ModalAddAnnouncement = () => {
  const { setShowAddAnnouncementModal, createAnnouncement } =
    useContext(Context);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormCreateAnnouncement>({
    resolver: yupResolver(schema),
  });

  const { fields, append } = useFieldArray({ control, name: "photos_gallery" });

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
        <form onSubmit={handleSubmit(createAnnouncement)}>
          <label htmlFor="title">Título</label>
          <input
            {...register("title")}
            id="title"
            type="text"
            placeholder="Digitar título"
          />
          <span>{errors.title?.message}</span>

          <div className="year-km-price">
            <div className="label-input-year">
              <label htmlFor="year">Ano</label>
              <input
                {...register("year")}
                id="year"
                type="number"
                min={1970}
                placeholder="Digitar ano"
              />
              <span>{errors.year?.message}</span>
            </div>

            <div className="label-input-km">
              <label htmlFor="km">Quilometragem</label>
              <input
                {...register("km")}
                id="km"
                type="number"
                min={0}
                placeholder="0"
              />
              <span>{errors.km?.message}</span>
            </div>

            <div className="label-input-price">
              <label htmlFor="price">Preço</label>
              <input
                {...register("price")}
                id="price"
                type="number"
                min={1}
                placeholder="Digitar preço"
              />
              <span>{errors.price?.message}</span>
            </div>
          </div>

          <label htmlFor="description">Descrição</label>
          <textarea
            {...register("description")}
            id="description"
            placeholder="Digitar descrição"
            rows={4}
            cols={50}
          />
          <span>{errors.description?.message}</span>

          <h5 id="title-type-vehicle">Tipo de veículo</h5>
          <div className="types-vehicle">
            <input
              {...register("type_vehicle")}
              type="radio"
              id="car"
              value="car"
              name="type_vehicle"
            />
            <label className="label-car" htmlFor="car">
              Carro
            </label>

            <input
              {...register("type_vehicle")}
              type="radio"
              id="motorcycle"
              value="motorcycle"
              name="type_vehicle"
            />
            <label className="label-motorcycle" htmlFor="motorcycle">
              Moto
            </label>
          </div>
          <span>{errors.type_vehicle?.message}</span>

          <label htmlFor="image-principal">Imagem de capa</label>
          <input
            {...register("image")}
            id="image-principal"
            type="text"
            placeholder="Inserir URL da imagem"
          />
          <span>{errors.image?.message}</span>

          <label htmlFor="first_image_gallery">1ª Imagem da galeria</label>
          <input
            {...register("first_photo_gallery")}
            id="first_image_gallery"
            type="text"
            placeholder="Inserir URL da imagem"
          />
          <span>{errors.first_photo_gallery?.message}</span>

          {fields.map((field, index) =>
            index < 5 ? (
              <>
                <label htmlFor={`image-${index}`}>Imagem da galeria</label>
                <input
                  {...register(`photos_gallery.${index}`)}
                  id={`image-${index}`}
                  type="text"
                  placeholder="Inserir URL da imagem"
                />
              </>
            ) : (
              ""
            )
          )}

          <button
            id={
              fields.length < 5
                ? "add-image-gallery"
                : "add-image-limit-reached"
            }
            type="button"
            onClick={() => {
              append("");
            }}
          >
            {fields.length < 5
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
            <button
              id={
                Object.keys(errors).length != 0
                  ? "create-announcement"
                  : "create-announcement-on"
              }
              type="submit"
            >
              Criar anúncio
            </button>
          </div>
        </form>
      </div>
    </AddAnnouncementStyle>
  );
};
