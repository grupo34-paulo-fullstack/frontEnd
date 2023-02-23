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
  width,
  height,
  lower_width,
}: IButton) => (
  <ButtonStyle
    width={width ? width : "146px"}
    height={height ? height : "48px"}
    lower_width={lower_width ? lower_width : "119px"}
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
