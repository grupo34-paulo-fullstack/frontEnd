import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(18, 18, 20, 0.5);
  z-index: 20000;
  position: fixed;
`;

export const Form = styled.form`
  background: #ffffff;
  border-radius: 8px;
  width: 520px;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 33px;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }

  .titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    .title {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height */

      /* Grey Scale/grey-1 */

      color: #212529;
    }
  }

  .info {
    margin-top: 18px;
    margin-bottom: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    color: #000000;
  }

  label {
    margin-bottom: 5px;
  }
  .x {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;

    &:hover {
      svg {
        transition: 0.3s;
        color: black;
      }
    }

    svg {
      transition: 0.3s;
      font-size: 24px;
      color: #adb5bd;
    }
  }

  .buttonBox {
    gap: 10px;
    display: flex;
    flex-direction: row-reverse;
  }
`;
