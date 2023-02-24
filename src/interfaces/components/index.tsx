export interface IButton {
  children: React.ReactNode;
  color: string;
  background: string;
  outline_color: string;
  background_hover: string;
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
  background_hover: string;
  color_hover?: string;
  outline_hover?: string;
  disable?: string;
  width?: string
  height?: string
  lower_width?: string
  onClick?: () => void
}
