import styled from "styled-components";

export const Body = styled.div`
  height: 100vh;
  border: 1px solid black;
  background: rgb(233, 236, 239);
  background: linear-gradient(
    0deg,
    rgba(233, 236, 239, 1) 40%,
    rgba(233, 236, 239, 1) 60%,
    rgba(69, 41, 230, 1) 60%
  );
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
  width: 60%;
  max-width: 55rem;

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

    width: 100%;
    height: 35vh;
    max-height: 22.1rem;
    img {
      max-width: 441px;
      max-height: 252.96px;
      width: 100%;
      height: 100%;
    }
  }
`;

export const CarSection = styled.section`
  h6 {
    width: 100%;
    margin-bottom: 1.9rem;
  }
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

    width: 100px;
    height: 38px;

    color: var(--colors-white);
    background: var(--colors-brand-1);
    border: 1.5px solid var(--colors-brand-1);
    border-radius: 4px;

    margin-top: 1rem;
  }
`;

export const Aside = styled.aside`
  background: #fdfdfd;
  border-radius: 4px;
  padding: 2rem 2rem 2rem 2rem;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 350px;

  section {
    width: 100%;
    height: 100%;

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
        padding: 27px 7px;
        width: 31%;
        height: 6.75rem;

        /* Grey Scale/grey-7 */

        background: #e9ecef;
        border-radius: 4px;
      }
    }
  }
  div {
  }
`;
