import styled from "styled-components";

interface ICardAuctionProps {
  backgroundColor?: string;
  url?: string;
}

export const CardContainer = styled.li<ICardAuctionProps>`
  max-width: 735px;
  min-width: 320px;
  min-height: 326px;
  max-height: 500px;
  list-style: none;
  border-radius: 4px;

  &:hover {
    /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%); */
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 70%,
      rgba(0, 0, 0, 0.9) 100%
    );

    div:has(a) {
      background-color: var(--colors-brand-2);
    }
  }

  .card-background {
    width: 100%;

    background-image: url(${(props) => props.url});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 22px 22px;
  border-radius: 4px 4px 0px 0px;

  /* background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, rgba(0, 0, 0, 1) 100%);  */
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.8) 100%
  );

  h6 {
    margin-top: 35px;
    color: var(--colors-grey-10);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  p {
    margin-top: 16px;
    color: var(--colors-grey-5);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .container-name {
    display: flex;
    color: var(--colors-white);
    margin-top: 24px;
  }

  .container-infos {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .card-price {
      font-family: var(--font-lexend);
      font-size: var(--fonts-heading-7-size);
      color: var(--colors-white);
    }
  }

  @media (min-width: 376px) {
    .container-infos {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .card-price {
        margin-top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (min-width: 426px) {
    padding: 22px 36px;

    h6 {
      margin-top: 50px;
    }
  }
`;

export const Timer = styled.div`
  width: 120px;
  height: 36px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--colors-white);
  border-radius: 32px;

  svg {
    margin-left: 8px;
    color: var(--colors-brand-1);
    font-size: 22px;
  }

  span {
    font-family: var(--font-lexend);
    font-size: var(--fonts-heading-7-size);
    line-height: var(--fonts-heading-7-line);
    margin-right: 12px;
  }
`;

export const NameIcon = styled.div<ICardAuctionProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  margin-right: 5px;

  width: 27px;
  height: 27px;

  font-size: 1rem;

  background-color: ${(props) => props.backgroundColor};
`;

export const SpanInfo = styled.div`
  display: flex;
  gap: 10px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 32px;
    color: var(--colors-brand-1);

    background: var(--colors-brand-4);
    border-radius: 4px;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 62px;
  padding: 0 22px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #4529e6;
  border-radius: 0px 0px 4px 4px;
  transition: 0.2s;

  &:hover {
    a {
      svg {
        animation-name: move;
        animation-duration: 1s;
        animation-iteration-count: infinite;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: var(--colors-white);
    text-decoration: none;

    svg {
      color: var(--colors-white);
      font-size: 30px;

      @keyframes move {
        0% {
          margin-right: 0px;
        }

        50% {
          margin-right: 7px;
        }

        100% {
          margin-right: 0px;
        }
      }
    }
  }

  @media (min-width: 426px) {
    padding: 0 36px;
  }
`;

export const ButtonsForAnnouncer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 62px;
  background-color: var(--colors-brand-1);
  border-radius: 0 0 4px 4px;

  button {
    cursor: default;
  }

  button:last-child {
    margin-left: 16px;
  }

  button:first-child {
    margin-left: 36px;
  }
  
`;
