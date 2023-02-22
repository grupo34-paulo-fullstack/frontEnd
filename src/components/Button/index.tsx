import { IButton } from "../../interfaces/components";
import { ButtonStyle } from "./style";

export const Button = ({
  background,
  color,
  outline_color,
  children,
  background_hover,
  color_hover,
  outline_hover,
  disable,
}: IButton) => (
  <ButtonStyle
    color={color}
    background={background}
    outline_color={outline_color}
    outline_hover={outline_hover}
    background_hover={background_hover}
    color_hover={color_hover}
    disable={disable}
  >
    {children}
  </ButtonStyle>
);
