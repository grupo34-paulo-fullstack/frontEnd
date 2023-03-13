import { useContext } from "react";
import { Context } from "../../context/Context";
import { EditAnnouncementStyle } from "./style";
import { CgClose } from "react-icons/cg";
import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormUpdateAnnouncement } from "../../interfaces/components";
import { Button } from "../Button";

const schema = yup.object().shape({
  title: yup.string(),
  year: yup.number().typeError("Apenas números").min(1970, "Acima de 1970"),
  km: yup.number().typeError("Apenas números").min(0, "Inválido"),
  price: yup.number().typeError("Apenas números").min(1, "Inválido"),
  description: yup.string(),
  type_vehicle: yup.string().required("Este campo é obrigatório"),
  is_active: yup.string().required("Este campo é obrigatório"),
  image: yup.string().required("Este campo é obrigatório"),
  first_photo_gallery: yup.string(),
  photos_gallery: yup.array(yup.string()).ensure(),
});

export const ModalEditAnnouncement = () => {
  const {
    setShowEditAnnouncementModal,
    setShowModalDeleteAnnouncement,
    updateAnnouncement,
    announcements,
    announcementId,
  } = useContext(Context);

  const filteredAnnouncement = announcements.find(
    (result) => result.id == announcementId
  );

  console.log(announcementId);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUpdateAnnouncement>({
    resolver: yupResolver(schema),
  });

  const { fields, append } = useFieldArray({ control, name: "photos_gallery" });

  return (
    <EditAnnouncementStyle>
      <div className="container-modal">
        <div className="header-modal">
          <h4>Editar anúncio</h4>
          <button onClick={() => setShowEditAnnouncementModal(false)}>
            <CgClose />
          </button>
        </div>

        <h5 id="title-type">Tipo de anúncio</h5>
        <div className="type-announcement">
          <button id="option-selected">Venda</button>
          <button id="option-blocked">Leilão</button>
        </div>

        <h5 id="title-form">Informações do veículo</h5>
        <form onSubmit={handleSubmit(updateAnnouncement)}>
          <label htmlFor="title">Título</label>
          <input
            {...register("title")}
            id="title"
            type="text"
            placeholder="Digitar título"
            defaultValue={`${filteredAnnouncement?.title}`}
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
                defaultValue={`${filteredAnnouncement?.year}`}
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
                defaultValue={`${filteredAnnouncement?.km}`}
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
                defaultValue={`${filteredAnnouncement?.price}`}
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
            defaultValue={`${filteredAnnouncement?.description}`}
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

          <h5 id="publicated">Publicado</h5>
          <div className="is_active">
            <input
              {...register("is_active")}
              type="radio"
              id="yes"
              value="yes"
              name="is_active"
            />
            <label className="label-yes" htmlFor="yes">
              Sim
            </label>

            <input
              {...register("is_active")}
              type="radio"
              id="no"
              value="no"
              name="is_active"
            />
            <label className="label-no" htmlFor="no">
              Não
            </label>
          </div>
          <span>{errors.is_active?.message}</span>

          <label htmlFor="image-principal">Imagem de capa</label>
          <input
            {...register("image")}
            id="image-principal"
            type="text"
            placeholder="Inserir URL da imagem"
            defaultValue={`${filteredAnnouncement?.image}`}
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
            <Button
              background="#DEE2E6"
              background_hover="#CED4DA"
              border_hover="#CED4DA"
              border_color="#DEE2E6"
              color="#495057"
              width="262px"
              height="48px"
              lower_width="262px"
              children="Excluir anúncio"
              onClick={() => {
                setShowEditAnnouncementModal(false)
                setShowModalDeleteAnnouncement(true)
              }}
            />
            <button
              id={
                Object.keys(errors).length != 0
                  ? "create-announcement"
                  : "create-announcement-on"
              }
              type="submit"
            >
              Salvar alterações
            </button>
          </div>
        </form>
      </div>
    </EditAnnouncementStyle>
  );
};
