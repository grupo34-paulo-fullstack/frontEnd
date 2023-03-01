import styled from "styled-components";

export const SuccessStyle = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  z-index: 2;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  height: 2720px;
  background-color: rgba(0, 0, 0, 0.5);

  .container-modal {
    display: flex;
    position: absolute;
    top: 80px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 520px;
    height: 229px;
    padding: 18px 24px;
    background-color: white;
    border-radius: 8px;

    .header-modal {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 40px;

      h3 {
        font-family: var(--font-lexend);
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        width: max-content;
      }

      button {
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
    }

    #message-success {
      font-family: var(--font-lexend);
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;
    }

    #message-information {
      font-family: var(--font-inter);
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--colors-grey-2);
    }
  }
`;
