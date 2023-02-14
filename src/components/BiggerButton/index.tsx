import { IBiggerButton } from "../../interfaces/components";
import { BiggerButtonStyle } from "./style";

const BiggerButton = ({
  background,
  color,
  outline_color,
  children,
  background_hover,
  color_hover,
  outline_hover,
  disable
}: IBiggerButton) => (
  <BiggerButtonStyle
    color={color}
    background={background}
    outline_color={outline_color}
    outline_hover={outline_hover}
    background_hover={background_hover}
    color_hover={color_hover}
    disable={disable}
  >
    {children}
  </BiggerButtonStyle>
);

export default BiggerButton;
