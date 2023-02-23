import styled from "styled-components";

export const Body = styled.div`
  background: rgb(233, 236, 239);
  background: linear-gradient(
    0deg,
    rgba(233, 236, 239, 1) 50%,
    rgba(233, 236, 239, 1) 50%,
    rgba(69, 41, 230, 1) 50%
  );
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  width: 100%;
`;

export const BoxImgCarInfoDescription = styled.div`
  width: 100%;
  max-width: 49rem;

  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: var(--colors-grey-10);
    margin-bottom: 1rem;
    padding: 1rem 1rem 1rem 1rem;
    width: 100%;
    height: 100%;
    max-height: 22.1rem;
    img {
      max-width: 27.563rem;
      max-height: 15.81rem;
      width: 100%;
      height: 100%;
    }
  }

  .description {
    width: 100%;
    padding: 2rem 2rem 2rem 2rem;
    border-radius: 4px;
    background: var(--colors-grey-10);

    h6 {
      margin-bottom: 1rem;
    }
    p {
      font-family: var(--font-inter);
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.75rem;
      color: var(--colors-grey-2);
    }
  }
`;

export const CarSection = styled.section`
  h6 {
    width: 100%;
    margin-bottom: 1.9rem;
  }
  margin-bottom: 1rem;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 4px;
  background: var(--colors-grey-10);

  .carInfoBox {
    display: flex;
    width: 100%;

    justify-content: space-between;
    align-items: center;

    .yearAndKmBox {
      display: flex;
      width: 40%;
      .yearKm {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 8px;
        gap: 10px;
        background: var(--colors-brand-4);
        border-radius: 4px;
        max-width: 60px;
        margin-right: 0.75rem;
      }
    }
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    gap: 10px;

    width: 6.25rem;
    height: 2.375rem;

    color: var(--colors-white);
    background: var(--colors-brand-1);
    border: 1.5px solid var(--colors-brand-1);
    border-radius: 4px;

    margin-top: 1rem;
  }
`;

export const Aside = styled.aside`
  width: 100%;
  max-width: 30rem;

  .photoSection {
    width: 100%;
    height: 100%;
    padding: 2rem 2rem 2rem 2rem;
    margin-bottom: 2rem;
    background: var(--colors-white);
    border-radius: 4px;
    max-height: 21.875rem;

    h6 {
      margin-bottom: 2rem;
    }
    .photoList {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      width: 100%;
      .photoElement {
        display: flex;
        align-items: center;
        padding: 27px 7px;
        width: 31%;
        height: 6.75rem;
        background: var(--colors-grey-7);
        border-radius: 4px;
      }
    }
  }
  .userSection {
    background: var(--colors-white);
    border-radius: 4px;
    padding: 2rem 2rem 2rem 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .userTag {
      font-family: var(--font-inter);
      font-style: normal;
      font-weight: 500;
      font-size: 2.25rem;
      line-height: 3.313rem;
      background: var(--colors-brand-1);
      border-radius: 50px;
      padding: 0.5rem 0.8rem 0.5rem 0.8rem;
      color: var(--colors-white);
      margin-bottom: 1rem;
    }
    .userName {
      font-family: var(--font-lexend);
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: var(--colors-grey-1);
      margin-bottom: 1rem;
    }
    .userDescription {
      font-family: var(--font-inter);
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.75rem;
      text-align: center;
      color: var(--colors-grey-2);
      margin-bottom: 1rem;
    }
    .userAds {
      font-family: var(--font-inter);
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 0px;
      color: var(--colors-white);

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 20px 28px;
      gap: 10px;

      background: var(--colors-grey-0);

      border: 1.5px solid var(--colors-grey-0);
      border-radius: 4px;
    }
  }
`;

export const Comments = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 2rem 2rem 2rem 2rem;
  background: var(--colors-white);
  border-radius: 4px;
  margin-top: 1rem;
  h6 {
    margin-bottom: 1rem;
  }
  .commentList {
    width: 100%;
    display: flex;
    flex-direction: column;
    .listElement {
      margin-bottom: 2.75rem;
      width: 100%;

      .userInfo {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 1.75rem;
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
    }
  }
`;
