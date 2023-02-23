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
  border: none;
  outline: 2px solid ${(props) => props.outline_color};
  cursor: pointer;
  transition: 0.2s;

  @media (max-width: 800px) {
    width: ${(props) => props.lower_width};
    height: 38px;
    font-weight: 600;
    font-size: 14px;
    padding: 12px 20px;
  }

  &:hover {
    background-color: ${(props) => props.background_hover};
    color: ${(props) => props.color_hover};
    outline-color: ${(props) => props.outline_hover};
    transition: 0.2s;
    cursor: ${(props) => props.disable};
  }
`;
