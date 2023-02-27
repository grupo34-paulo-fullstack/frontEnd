import { IGallery } from "../context";

export interface IButton {
  children: React.ReactNode;
  color: string;
  background: string;
  outline_color: string;
  background_hover?: string;
  color_hover?: string;
  outline_hover?: string;
  disable?: string;
  width?: string
  height?: string
  lower_width?: string
  onClick?: () => void
}

export interface IButtonStyleProps {
  color: string;
  background: string;
  outline_color?: string;
  background_hover?: string;
  color_hover?: string;
  outline_hover?: string;
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
  photo1: string
  photos0?: string
  photos1?: string
  photos2?: string
  photos3?: string
  photos4?: string

}

export interface IFormUpdateAnnouncement {
  title?: string;
  year?: number;
  km?: number;
  price?: number;
  description?: string;
  type_vehicle?: string;
  image?: string;
  is_active?: boolean;
  gallery?: IGallery[]
}

