import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  height: 140px;
  background-color: #0b0d0d;

  @media (max-width: 620px) {
    height: 310px;
  }

  .container-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1350px;
    width: 100%;
    height: 100%;

    @media (max-width: 620px) {
      flex-direction: column;
      justify-content: space-evenly;
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      margin-left: 59px;

      @media (max-width: 620px) {
        margin: 0;
      }

      img {
        height: 27px;
        width: 154px;
      }
    }

    p {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: white;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 53px;
      height: 50px;
      background-color: #212529;
      color: white;
      border: 1px solid #212529;
      border-radius: 4px;
      text-decoration: none;
      margin-right: 59px;
      cursor: pointer;
      transition: 0.2s;

      @media (max-width: 620px) {
        margin: 0;
      }

      &:hover {
        border: 1px solid white;
      }

      svg {
        font-size: 25px;
      }
    }
  }
`;
