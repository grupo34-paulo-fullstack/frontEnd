import styled from "styled-components";

export const AnnouncerPageStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2500px;
  max-width: 100vw;
  width: 100%;

  @media (max-width: 800px) {
    height: 2100px;
  }

  .container-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 1600px;
    height: 100%;
    width: 100%;
    background-color: var(--colors-grey-8);

    .background-announcer {
      display: flex;
      max-width: 1600px;
      width: 100%;
      height: 277px;
      background-color: var(--colors-brand-1);
    }

    .information-announcer {
      display: flex;
      position: absolute;
      top: 155px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      border-radius: 4px;
      max-width: 1240px;
      width: 100%;
      height: 406px;
      z-index: 1;
      padding: 44px 71px 44px 41px;
      background-color: var(--colors-grey-10);

      @media (max-width: 1272px) {
        max-width: 1190px;
      }

      @media (max-width: 800px) {
        height: 461px;
      }

      figure {
        margin: 0;
        width: 104px;
        height: 104px;

        img {
          width: 104px;
          height: 104px;
        }
      }

      .name-announcer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 32px;
        max-width: 320px;
        width: 100%;

        #name {
          font-weight: 600;
          font-size: 20px;
          line-height: 25px;
          color: var(--colors-grey-1);
          font-family: var(--font-lexend);
          margin-right: 10px;
        }

        .announcer-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          background-color: var(--colors-brand-4);
          width: 92px;
          height: 32px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;

          #announcer {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: var(--colors-brand-1);
            font-family: var(--font-inter);
          }
        }
      }

      #description {
        font-family: "Inter";
        font-weight: 400;
        font-size: 16px;
        text-align: justify;
        width: 100%;
        color: var(--colors-grey-2);
        line-height: 28px;
      }
    }

    .content-announcements {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 1493px;
      width: 100%;
      margin-top: 293px;
      padding-left: 10px;
      padding-right: 10px;

      @media (max-width: 800px) {
        margin-top: 300px;
      }

      #title-auction {
        margin-bottom: 40px;

        @media (max-width: 800px) {
          display: none;
        }
      }

      .list-auction {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        margin-bottom: 200px;
        overflow-y: hidden;

        @media (max-width: 1500px) {
          overflow-x: scroll;
        }

        @media (max-width: 800px) {
          margin-bottom: 52px;
        }

        li {
          margin-right: 24px;
        }
      }

      #title-cars {
        margin-bottom: 62px;
      }

      .list-cars {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        overflow-y: hidden;
        margin-bottom: 210px;

        @media (max-width: 1500px) {
          overflow-x: scroll;
        }

        @media (max-width: 800px) {
          margin-bottom: 52px;
        }

        li {
          margin-right: 48px;
          margin-bottom: 15px;
        }
      }

      #title-bikes {
        margin-bottom: 62px;
      }

      .list-bikes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        overflow-y: hidden;

        @media (max-width: 1500px) {
          overflow-x: scroll;
        }

        li {
          margin-right: 48px;
          margin-bottom: 15px;
        }
      }
    }
  }
`;

export const AnnouncerPageWithoutTokenStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 1928px;
  height: 100%;
  max-width: 100vw;
  width: 100%;

  .container-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    max-width: 1600px;
    width: 100%;
    background-color: var(--colors-grey-8);

    .background-announcer {
      display: flex;
      max-width: 1600px;
      width: 100%;
      height: 277px;
      background-color: var(--colors-brand-1);
    }

    .information-announcer {
      display: flex;
      position: absolute;
      top: 155px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      border-radius: 4px;
      max-width: 1240px;
      width: 100%;
      height: 327px;
      z-index: 1;
      padding: 44px 71px 44px 41px;
      background-color: var(--colors-grey-10);

      @media (max-width: 1272px) {
        max-width: 1190px;
      }

      @media (max-width: 800px) {
        height: 461px;
      }

      figure {
        margin: 0;
        width: 104px;
        height: 104px;

        img {
          width: 104px;
          height: 104px;
        }
      }

      .name-announcer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 32px;
        max-width: 320px;
        width: 100%;

        #name {
          font-weight: 600;
          font-size: 20px;
          line-height: 25px;
          color: var(--colors-grey-1);
          font-family: var(--font-lexend);
          margin-right: 10px;
        }

        .announcer-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          background-color: var(--colors-brand-4);
          width: 92px;
          height: 32px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;

          #announcer {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: var(--colors-brand-1);
            font-family: var(--font-inter);
          }
        }
      }

      #description {
        font-family: "Inter";
        font-weight: 400;
        font-size: 16px;
        text-align: justify;
        width: 100%;
        color: var(--colors-grey-2);
        line-height: 28px;
      }
    }

    .content-announcements {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 1493px;
      width: 100%;
      margin-top: 330px;
      padding-left: 10px;
      padding-right: 10px;

      @media (max-width: 800px) {
        margin-top: 300px;
      }

      #title-auction {
        margin-bottom: 40px;

        @media (max-width: 800px) {
          display: none;
        }
      }

      .list-auction {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        margin-bottom: 200px;
        overflow-y: hidden;

        @media (max-width: 1500px) {
          overflow-x: scroll;
        }

        @media (max-width: 800px) {
          margin-bottom: 52px;
        }

        li {
          margin-right: 24px;
        }
      }

      #title-cars {
        margin-bottom: 62px;
      }

      .list-cars {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        overflow-y: hidden;
        margin-bottom: 206px;

        @media (max-width: 1500px) {
          overflow-x: scroll;
        }

        @media (max-width: 800px) {
          margin-bottom: 52px;
        }

        li {
          margin-right: 48px;
          margin-bottom: 15px;
        }
      }

      #title-bikes {
        margin-bottom: 62px;
      }

      .list-bikes {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        overflow-y: hidden;
        margin-bottom: 116px;

        @media (max-width: 1500px) {
          overflow-x: scroll;
        }

        li {
          margin-right: 48px;
          margin-bottom: 15px;
        }
      }
    }
  }
`;


export const NameIconAnnouncer = styled.h2`
  display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%; 
    margin-right: 5px;

    color: var(--colors-white);

    width: 100px;
    height: 100px;

    background-color: var(--colors-brand-1);
`