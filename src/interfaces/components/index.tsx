export interface IBiggerButton {
  children: React.ReactNode;
  color: string;
  background: string;
  outline_color: string;
  background_hover: string;
  color_hover?: string;
  outline_hover?: string;
  disable?: string;
}

export interface IBiggerButtonStyleProps {
  color: string;
  background: string;
  outline_color?: string;
  background_hover: string;
  color_hover?: string;
  outline_hover?: string;
  disable?: string;
}
