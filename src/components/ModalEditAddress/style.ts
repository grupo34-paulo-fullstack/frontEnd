import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: rgba(18, 18, 20, 0.5);
  z-index: 20000;
  position: absolute;
  top: 0;

  height: 2300px;

  @media (max-width: 800px) {
    height: 2190px;
  }

  @media (max-width: 620px) {
    height: 2180px;
  }
`;

export const Form = styled.form`
  margin-top: 80px;
  background: #ffffff;
  border-radius: 8px;
  max-width: 520px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 33px;
  position: absolute;
  top: 80px;

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

  .boxTwoInfos {
    display: flex;
    display: flex;
    align-items: center;

    width: 100%;

    .boxFirstHalf {
      padding-right: 5px;
      width: 50%;
    }
    .boxSecondHalf {
      width: 50%;
    }
  }
`;
