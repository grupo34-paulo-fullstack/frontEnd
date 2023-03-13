import styled from "styled-components";

export const Container = styled.li`
  margin-bottom: 2.75rem;
  width: 100%;

  .userInfo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.75rem;

    .userData {
      display: flex;
      align-items: center;
    }

    .button-settings {
      display: flex;

      #delete-comment {
        margin-right: 5px;

        &:hover {
          svg {
            color: rgba(255, 0, 0, 1);
          }
        }

        svg {
          color: rgba(255, 0, 0, 0.5);
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: transparent;
        background-color: transparent;
        padding: 0;
        width: 24px;
        height: 24px;
        cursor: pointer;

        &:hover {
          svg {
            color: black;
          }
        }

        svg {
          transition: 0.2s;
          font-size: 24px;
          color: var(--colors-grey-3);
        }
      }
    }

    .userBall {
      font-family: var(--font-inter);
      width: 2rem;
      height: 2rem;
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 0px;

      background: var(--colors-brand-1);
      border-radius: 50px;

      color: var(--colors-white);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;
    }
    .name {
      margin-right: 0.5rem;
      font-family: var(--font-inter);
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: var(--colors-grey-1);
    }
    .userDot {
      width: 0.25rem;
      height: 0.25rem;
      background: var(--colors-grey-4);
      border-radius: 50px;
      margin-right: 0.5rem;
    }

    .postedDate {
      font-family: var(--font-inter);
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.5rem;

      color: var(--colors-grey-3);
    }
  }
  .userComment {
    font-family: var(--font-inter);
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--colors-grey-2);
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  .textarea-button {
    position: relative;
    #updateComment-textarea {
      resize: none;
      padding: 10px;
      padding-bottom: 30px;
      width: 100%;
      height: 120px;
      border: 1.5px solid var(--colors-grey-5);
      border-radius: 0 0 8px 0;
      font-family: var(--font-inter);
      transition: 0.3s;
      outline-color: transparent;

      &:focus {
        outline-color: var(--colors-brand-1);
      }
    }

    #updateComment-button {
      position: absolute;
      bottom: 15px;
      right: 15px;
      width: 60px;
      height: 38px;
      padding: 0;
      margin: 0;
      border-radius: 4px;
      border: 1.5px solid var(--colors-brand-1);
      background-color: var(--colors-brand-1);
      color: white;
      font-weight: 600;
      font-family: var(--font-inter);
      cursor: pointer;

      &:hover {
        background-color: var(--colors-brand-2);
      }
    }
  }
`;
