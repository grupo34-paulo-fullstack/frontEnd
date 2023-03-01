import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  IFormCreateAnnouncement,
  IFormUpdateAnnouncement,
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

  const [showAddAnnouncementModal, setShowAddAnnouncementModal] =
    useState<boolean>(false);
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [showModalAddAnnouncementSuccess, setShowModalAddAnnouncementSuccess] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const getAllAnnouncements = () =>
    api
      .get("/announcements")
      .then((res) => setAnnouncements(res.data))
      .catch((error) => console.log(error));

  const createAnnouncement = async (data: IFormCreateAnnouncement) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await api
      .post("/announcements", data)
      .then((res) => {
        setAnnouncements((old) => [...old, res.data]);
        setShowAddAnnouncementModal(false);
        setShowModalAddAnnouncementSuccess(true);
      })
      .catch((error) => toast.error(`${error.response.data.message}`));
  };

  const updateAnnouncement = async (
    data: IFormUpdateAnnouncement,
    id: string
  ) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await api
      .patch(`/announcements/${id}`, data)
      .catch((error) => toast.error(`${error.response.data.message}`));
  };

  const deleteAnnouncement = async (id: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await api
      .delete(`/announcements/${id}`)
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
        getAllAnnouncements,
        updateAnnouncement,
        deleteAnnouncement,
        showModalAddAnnouncementSuccess,
        setShowModalAddAnnouncementSuccess,
      }}
    >
      {children}
    </Context.Provider>
  );
};
