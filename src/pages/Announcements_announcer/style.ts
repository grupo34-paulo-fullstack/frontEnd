import styled from "styled-components";

export const AnnouncementsAnnouncerPageStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2444px;
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

      figure {
        margin: 0;
        img {
          width: 104px;
          height: 104px;
        }
      }

      .name-announcer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 32px;
        width: 230px;

        #name {
          font-weight: 600;
          font-size: 20px;
          line-height: 25px;
          color: var(--colors-grey-1);
          font-family: var(--font-lexend);
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

      p {
        font-family: "Inter";
        font-weight: 400;
        font-size: 16px;
        color: var(--colors-grey-2);
        line-height: 28px;
      }
    }

    .content-announcements {
     display: flex;
     max-width: 1600px;
     flex-direction: column;
     align-items: flex-start;
     margin-top: 200px;
    }
  }
`;
