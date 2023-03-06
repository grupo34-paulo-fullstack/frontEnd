import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  IFormCreateAnnouncement,
  IFormUpdateAnnouncement,
  IEditUserProfile,
} from "../interfaces/components";
import { IAnnouncement, IContext, IProvider } from "../interfaces/context";
import { api } from "../service/api";

export const Context = createContext({} as IContext);

export const Provider = ({ children }: IProvider) => {
  useEffect(() => {
    api
      .get("/announcements")
      .then((res) => setAnnouncements(res.data))
      .catch((error) => console.log(error));
  }, []);

  const token = localStorage.getItem("@token");

  const [isModalProfileOpen, setModalProfile] = useState(false);
  const [isModalAddressOpen, setModalAddress] = useState(false);
  const [showAddAnnouncementModal, setShowAddAnnouncementModal] =
    useState<boolean>(false);
  const [showEditAnnouncementModal, setShowEditAnnouncementModal] =
    useState<boolean>(false);
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [announcementId, setAnnouncementId] = useState<string>("");
  const [showModalAddAnnouncementSuccess, setShowModalAddAnnouncementSuccess] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const createAnnouncement = (data: IFormCreateAnnouncement) => {
    const token = localStorage.getItem("@token");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const { first_photo_gallery, photos_gallery, ...rest } = data;

    let gallery = [];

    data.photos_gallery.map((value: string) => gallery.push(value));

    gallery.unshift(data.first_photo_gallery);

    const newData = { ...rest, gallery };

    api
      .post("/announcements", newData)
      .then((res) => {
        setAnnouncements((old) => [...old, res.data]);
        setShowAddAnnouncementModal(false);
        setShowModalAddAnnouncementSuccess(true);
      })
      .catch((error) => toast.error(`${error.response.data.message}`));
  };

  const updateAnnouncement = (data: IFormUpdateAnnouncement, id: string) => {
    const token = localStorage.getItem("@token");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const { first_photo_gallery, photos_gallery, ...rest } = data;

    let gallery = [];

    data.photos_gallery.map((value: string) => gallery.push(value));

    gallery.unshift(data.first_photo_gallery);

    const newData = { ...rest, gallery };

    console.log(newData);

    api
      .patch(`/announcements/${id}`, newData)
      .catch((error) => toast.error(`${error.response.data.message}`));
  };

  const deleteAnnouncement = (id: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    api
      .delete(`/announcements/${id}`)
      .catch((error) => toast.error(`${error.response.data.message}`));
  };

  const checkCep = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const updateUser = (data: IEditUserProfile) => {
    const token = localStorage.getItem("@token");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    api
      .patch(`/users`, data)
      .then((response) => {
        toast.success("Dados editados com sucesso!");
      })
      .catch((error) => toast.error(`${error.response.data.message}`));
  };

  const deleteUser = () => {
    const token = localStorage.getItem("@token");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    api
      .delete(`/users`)
      .then((response) => {
        toast.success("Sua conta foi deletada!");
      })
      .catch((error) => toast.error(`${error.response.data.message}`));
  };

  return (
    <Context.Provider
      value={{
        showAddAnnouncementModal,
        setShowAddAnnouncementModal,
        announcements,
        setAnnouncements,
        createAnnouncement,
        updateAnnouncement,
        deleteAnnouncement,
        checkCep,
        showEditAnnouncementModal,
        setShowEditAnnouncementModal,
        announcementId,
        setAnnouncementId,
        isModalProfileOpen,
        setModalProfile,
        setShowModalAddAnnouncementSuccess,
        updateUser,
        isModalAddressOpen,
        setModalAddress,
      }}
    >
      {children}
    </Context.Provider>
  );
};
