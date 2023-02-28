import styled from "styled-components";

export const RegisterMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(233, 236, 239, 1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding-right: 3rem;
  padding-left: 3rem;
  padding-top: 2.75rem;
  padding-bottom: 2.75rem;
  background-color: var(--colors-grey-10);
  width: 25.688rem;
  margin-top: 2.875rem;
  margin-bottom: 2.875rem;
  h5 {
    font-family: var(--font-lexend);
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */
    margin-bottom: 2rem;
    color: #000000;
  }
  label {
    margin-bottom: 0.5rem;
  }
  span {
    font-family: var(--font-inter);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    margin-bottom: 1.5rem;
    color: #000000;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;
    background: var(--colors-brand-4);
    color: var(--colors-grey-0);
    cursor: pointer;
    /* Brand/brand1 */

    border: 1.5px solid var(--colors-brand-4);
    border-radius: 4px;
    &:hover {
      color: var(--colors-white);
      background-color: var(--colors-brand-1);
      transition: 0.8s;
    }
  }

  .boxTwoInfos {
    display: flex;
    width: 100%;

    .boxFirstHalf {
      padding-right: 5px;
    }
    .boxSecondHalf {
    }
  }
`;
