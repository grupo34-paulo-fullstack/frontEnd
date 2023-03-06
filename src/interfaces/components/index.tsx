import { IGallery } from "../context";

export interface IButton {
  children: React.ReactNode;
  id?: string;
  color: string;
  background: string;
  border_color: string;
  background_hover?: string;
  color_hover?: string;
  border_hover?: string;
  disable?: string;
  width?: string
  height?: string
  lower_width?: string
  onClick?: any
}

export interface IButtonStyleProps {
  color: string;
  background: string;
  border_color?: string;
  background_hover?: string;
  color_hover?: string;
  border_hover?: string;
  disable?: string;
  width?: string
  height?: string
  lower_width?: string
  onClick?: () => void
}

export interface IFormCreateAnnouncement {
  title: string
  year: string
  km: string
  price: string
  description: string
  type_vehicle: string
  image: string
  first_photo_gallery:  string
  photos_gallery: any
}

export interface IFormUpdateAnnouncement {
  title?: string
  year?: string
  km?: string
  price?: string
  description?: string
  type_vehicle?: string
  is_active?: string
  image?: string
  first_photo_gallery?:  string
  photos_gallery?: any
}

export interface ILoginRequest {
  email: string;
  password: string;
}