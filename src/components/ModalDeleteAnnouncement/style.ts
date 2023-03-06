import styled from "styled-components";

export const DeleteAnnouncementStyle = styled.div`
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

  @media (max-width: 800px) {
    height: 2180px;
  }

  @media (max-width: 620px) {
    height: 2180px;
  }

  .container-modal {
    display: flex;
    top: 80px;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 520px;
    width: 100%;
    height: 331px;
    padding: 18px 24px;
    border-radius: 8px;
    background-color: white;

    @media (max-width: 380px) {
     height: 360px;
    }

    .header-modal {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 43px;

      @media (max-width: 445px) {
        margin-bottom: 30px;
      }
      
      h3 {
       font-family: var(--font-lexend);
       font-weight: 500;
       font-size: 16px;
       line-height: 20px;
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
     
     .content-modal {
      margin-bottom: 43px;

      @media (max-width: 445px) {
        margin-bottom: 30px;
      }

      h4 {
       font-family: var(--font-lexend);
       font-weight: 700;
       font-size: 16px;
       line-height: 20px;
       margin-bottom: 25px;
       width: 100%;
      }
      
      p {
       font-family: var(--font-inter);
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: var(--colors-grey-2);
        width: 100%;
      }
    }

    .buttons {
      display: flex;
      width: 100%;
      height: 48px;
      align-items: center;
      justify-content: flex-end;

      #button-cancel {
        margin-right: 10px;
      }
    }
  }
`;
