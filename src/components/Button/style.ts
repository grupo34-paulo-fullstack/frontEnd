import styled from "styled-components";
import { IButtonStyleProps } from "../../interfaces/components";

export const ButtonStyle = styled.button<IButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 4px;
  border: 2px solid ${(props) => props.border_color};
  cursor: pointer;
  transition: 0.2s;

  @media (max-width: 800px) {
    width: ${(props) => props.lower_width};
    font-weight: 600;
    font-size: 14px;
    padding: 12px 20px;
  }

  &:hover {
    background-color: ${(props) => props.background_hover};
    color: ${(props) => props.color_hover};
    border-color: ${(props) => props.border_color};
    transition: 0.2s;
    cursor: ${(props) => props.disable};
  }
`;
