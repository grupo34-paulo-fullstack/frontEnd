import styled from "styled-components";
import { IBiggerButtonStyleProps } from "../../interfaces/components";

export const BiggerButtonStyle = styled.button<IBiggerButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  font-weight: 600;
  font-size: 16px;
  width: 146px;
  height: 48px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 4px;
  border: none;
  outline: 1px solid ${(props) => props.outline_color};
  cursor: pointer;
  transition: 0.2s;

  @media (max-width: 800px) {
    width: 119px;
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
