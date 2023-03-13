import { IButton } from "../../interfaces/components";
import { ButtonStyle } from "./style";

export const Button = ({
  id,
  background,
  color,
  border_color,
  children,
  background_hover,
  color_hover,
  border_hover,
  disable,
  width,
  height,
  lower_width,
  onClick,
}: IButton) => (
  <ButtonStyle
    id={id}
    width={width ? width : "146px"}
    height={height ? height : "48px"}
    lower_width={lower_width ? lower_width : "119px"}
    color={color}
    background={background}
    border_color={border_color}
    border_hover={border_hover}
    background_hover={background_hover}
    color_hover={color_hover}
    disable={disable}
    onClick={onClick}
  >
    {children}
  </ButtonStyle>
);
