import { IFormCreateAnnouncement, IFormUpdateAnnouncement } from "../components";

export interface IProvider {
  children: React.ReactNode;
}

export interface IContext {
  showAddAnnouncementModal: boolean;
  setShowAddAnnouncementModal: React.Dispatch<React.SetStateAction<boolean>>;
  announcements: IAnnouncement[]
  setAnnouncements: React.Dispatch<React.SetStateAction<IAnnouncement[]>>
  createAnnouncement: (data: IFormCreateAnnouncement) => void
  getAllAnnouncements: () => Promise<void>
  updateAnnouncement: (data: IFormUpdateAnnouncement, id: string) => void
  deleteAnnouncement: (id: string) => void
}

export interface IAnnouncement {
  id: string;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  createdAt: Date;
  type_vehicle: string;
  image: string;
  is_active: boolean;
  user: IUser;
  gallery?: IGallery[];
}

export interface IGallery {
  id: string
  image: string
}

export interface IUser {
  id: string
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description?: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement?: string;
  is_announcer: boolean;
  password: string;
}