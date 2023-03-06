import {
  IFormCreateAnnouncement,
  IFormUpdateAnnouncement,
} from "../components";

export interface IProvider {
  children: React.ReactNode;
}

export interface IContext {
  showAddAnnouncementModal: boolean;
  setShowAddAnnouncementModal: React.Dispatch<React.SetStateAction<boolean>>;
  showEditAnnouncementModal: boolean;
  setShowEditAnnouncementModal: React.Dispatch<React.SetStateAction<boolean>>;
  announcements: IAnnouncement[];
  setAnnouncements: React.Dispatch<React.SetStateAction<IAnnouncement[]>>;
  createAnnouncement: (data: IFormCreateAnnouncement) => void
  updateAnnouncement: ((data: IFormUpdateAnnouncement, id: string) => void) | any
  deleteAnnouncement: (id: string) => void
  checkCep: (e: React.ChangeEvent<HTMLInputElement>) => void;
  announcementId: string;
  setAnnouncementId: React.Dispatch<React.SetStateAction<string>>;
}

export interface IAuthContext {
  handleRegister: (data: ICreateUser) => void;
  user: IUser | null;
  setUser: any;
  setLoading: any;
  loading: boolean;
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
  id: string;
  image: string;
}

export interface IUser {
  id: string;
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
  passwordCheck?: string;
}

export interface IAnnouncementResponse {
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
  gallery: any[];
}

export interface ICreateUser {
  id: string;
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
  is_announcer: string;
  password: string;
  passwordCheck?: string;
}
