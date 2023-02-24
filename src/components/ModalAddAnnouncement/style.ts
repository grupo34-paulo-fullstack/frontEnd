import styled from "styled-components";

export const AddAnnouncementStyle = styled.div`
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
    height: 2300px;
  }

  @media (max-width: 620px) {
    height: 2490px;
  }
  
  .container-modal {
    display: flex;
    top: 80px;
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--colors-white);
    max-width: 520px;
    width: 100%;
    min-height: 1036px;
    border-radius: 8px;
    padding-left: 24px;
    padding-right: 30px;

    .header-modal {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 56px;
      margin-bottom: 10px;

      h4 {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        font-family: var(--font-lexend);
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

    #title-type {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 18px;
      font-family: var(--font-inter);
    }

    .type-announcement {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 24px;

      button {
        width: 228px;
        height: 48px;
        border-radius: 4px;
        font-family: var(--font-inter);
      }

      #option-selected {
        background-color: var(--colors-brand-1);
        border: 1.5px solid var(--colors-brand-1);
        font-weight: 600;
        font-size: 16px;
        color: #ffffff;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
          background-color: var(--colors-brand-2);
          border-color: var(--colors-brand-2);
        }
      }

      #option-blocked {
        cursor: not-allowed;
        border: 1.5px solid var(--colors-grey-4);
        background-color: #ffffff;
        font-weight: 600;
        font-size: 16px;
        color: var(--colors-grey-0);
      }
    }

    #title-form {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 24px;
      font-family: var(--font-inter);
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      label {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: var(--colors-grey-1);
        width: max-content;
        margin-bottom: 8px;
        font-family: var(--font-inter);
      }

      input {
        width: 100%;
        height: 48px;
        outline: 1.5px solid var(--colors-grey-7);
        border: none;
        font-size: 16px;
        border-radius: 4px;
        padding-left: 16px;
        margin-bottom: 24px;
        transition: 0.2s;

        &:hover {
          background-color: var(--colors-grey-8);
          outline-color: var(--colors-grey-8);
        }

        &::placeholder {
          font-weight: 400;
          font-size: 16px;
          color: var(--colors-grey-3);
        }

        &:focus {
          background-color: var(--colors-grey-9);
          outline-color: var(--colors-brand-2);
        }
      }

      .year-km-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 24px;

        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 148px;
          height: 73px;

          input {
            height: 48px;
            margin: 0;
          }
        }
      }

      #description {
        outline-color: var(--colors-grey-7);
        max-width: 466px;
        width: 100%;
        height: 80px;
        font-family: var(--font-inter);
        font-size: 16px;
        border: none;
        outline: 1.5px solid var(--colors-grey-7);
        border-radius: 4px;
        padding: 16px 0 0 16px;
        resize: none;
        background-color: var(--colors-grey-10);
        transition: 0.2s;
        margin-bottom: 24px;

        &::placeholder {
          font-weight: 400;
          color: var(--colors-grey-3);
        }

        &:hover {
          background-color: var(--colors-grey-9);
        }
      }

      #title-type-vehicle {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        font-family: var(--font-inter);
        margin-bottom: 18px;
      }

      .types-vehicle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 24px;

        input {
          display: none;
          width: 50px;
          height: 50px;
          border-radius: 0;
        }

        #car {
          &:checked ~ .label-car {
            transition: 0.2s;
            background-color: var(--colors-brand-1);
            border-color: var(--colors-brand-1);
            color: white;
          }
        }

        #motorcycle {
          &:checked ~ .label-motorcycle {
            transition: 0.2s;
            background-color: var(--colors-brand-1);
            border-color: var(--colors-brand-1);
            color: white;
          }
        }

        label {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 228px;
          height: 48px;
          border: 1.5px solid var(--colors-grey-4);
          border-radius: 4px;
          background-color: white;
          color: var(--colors-grey-0);
          cursor: pointer;
          font-weight: 600;
          font-size: 16px;
        }
      }

      #add-image-gallery {
        max-width: 315px;
        width: 100%;
        height: 38px;
        color: var(--colors-brand-1);
        background-color: var(--colors-brand-4);
        border: 1.5px solid var(--colors-brand-4);
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        font-family: var(--font-inter);
        cursor: pointer;
        margin-bottom: 55px;
        transition: 0.2s;

        &:hover {
          background-color: white;
        }

        @media (max-width: 343px) {
          height: 46px;
        }
      }

      #add-image-limit-reached {
        max-width: 315px;
        width: 100%;
        height: 38px;
        color: var(--colors-alert-1);
        background-color: var(--colors-alert-2);
        border: 1.5px solid var(--colors-brand-4);
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        font-family: var(--font-inter);
        cursor: not-allowed;
        margin-bottom: 55px;
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        margin-bottom: 26px;

        #button-cancel {
          cursor: pointer;
          height: 48px;
          width: 126px;
          color: var(--colors-grey-2);
          background-color: var(--colors-grey-6);
          border: 1.5px solid var(--colors-grey-6);
          border-radius: 4px;
          transition: 0.2s;
          margin-right: 10px;
          font-weight: 600;
          font-size: 16px;

          &:hover {
            background-color: var(--colors-grey-5);
            border-color: var(--colors-grey-5);
          }
        }

        #create-announcement-off {
          cursor: pointer;
          width: 193px;
          height: 48px;
          background-color: var(--colors-brand-3);
          font-weight: 600;
          font-size: 16px;
          color: var(--colors-brand-4);
          border-radius: 4px;
          border: 1.5px solid var(--colors-brand-3);
        }

        #create-announcement-on {
          cursor: pointer;
          width: 193px;
          height: 48px;
          background-color: var(--colors-brand-1);
          font-weight: 600;
          font-size: 16px;
          color: white;
          border-radius: 4px;
          border: 1.5px solid var(--colors-brand-1);

          &:hover {
            background-color: var(--colors-brand-2);
            border-color: var(--colors-brand-2);
          }
        }
      }
    }
  }
`;
