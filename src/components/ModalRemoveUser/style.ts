import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: rgba(18, 18, 20, 0.5);
  z-index: 20000;
  position: fixed;

  .removeUserBox {
    margin-top: 80px;
    width: 520px;
    background: #ffffff;
    border-radius: 8px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 33px;
  }

  .titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-bottom: 25px;

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

  .secondTitle {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    color: #000000;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* or 175% */

    /* Grey Scale/grey-2 */
    margin-top: 25px;
    color: #495057;
  }
  .buttonBox {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    justify-content: flex-end;
  }
`;
