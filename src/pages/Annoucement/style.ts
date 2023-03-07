import styled from "styled-components";

export const Body = styled.main`
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
  width: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  margin-top: 2.5rem;
  width: 68.3%;
  max-width: 1300px;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 2000px;
  }
`;

export const BoxImgCarInfoDescription = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: var(--colors-grey-10);
    margin-bottom: 1rem;
    padding: 1rem 1rem 1rem 1rem;
    width: 100%;
    min-height: 350px;
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
    @media screen and (max-width: 1000px) {
      margin-bottom: 1rem;
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
        margin-right: 0.75rem;
        font-family: var(--font-inter);
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.5rem;

        color: var(--colors-brand-1);

        &:last-child {
          max-width: 95px;
          width: 100%;
        }
      }
    }
    .price {
      font-family: var(--font-lexend);
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: var(--colors-grey-1);
    }
  }
  button {
    padding: 12px 20px;
    gap: 10px;

    margin-top: 1rem;
  }
`;

export const Aside = styled.aside`
  width: 35%;
  /* max-width: 30rem; */

  @media screen and (max-width: 1000px) {
    width: 100%;
    max-width: 100rem;
  }

  .photoSection {
    width: 100%;
    height: 100%;
    padding: 2rem 2rem 2rem 2rem;
    margin-bottom: 2rem;
    background: var(--colors-white);
    border-radius: 4px;
    max-height: 21.875rem;

    img {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 200px;
      max-height: 200px;
      margin: 0 auto;
    }

    h6 {
      margin-bottom: 2rem;
    }
    .photoList {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      width: 100%;
      .photoElement {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 5px;
        width: 29%;
        height: 6.75rem;
        background: var(--colors-grey-7);
        border-radius: 4px;
        .asideImg {
          width: 85%;
          height: 100%;
          object-fit: cover;
        }
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
      display: flex;
      align-items: center;
      justify-content: center;

      font-family: var(--font-inter);
      font-style: normal;
      font-weight: 500;
      font-size: 2.25rem;
      line-height: 3.313rem;
      background: var(--colors-brand-1);
      border-radius: 50px;
      width: 80px;
      height: 80px;
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
      font-weight: 600;
      font-size: 1rem;
      line-height: 0px;
      color: var(--colors-white);
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 28px;

      background: var(--colors-grey-0);

      border: 1.5px solid var(--colors-grey-0);
      border-radius: 4px;
      cursor: pointer;

      /* @media screen and (max-width: 1200px){
        font-size: 0.8rem;
      }

      @media screen and (max-width: 1075px){
        font-size: 0.65rem;
      }

      @media screen and (max-width: 1000px){
        font-size: 1rem;
 */
      transition: 0.2s;

      &:hover {
        background-color: #212529;
      }
    }
  }
`;

export const CommentsBox = styled.section`
  width: 68.3%;
  max-width: 1300px;
  margin-bottom: 4.563rem;
  margin-top: 1rem;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 2000px;
  }
`;

export const Comments = styled.section`
  display: flex;
  flex-direction: column;

  width: 63.4%;

  padding: 2rem 2rem 2rem 2rem;
  background: var(--colors-white);
  border-radius: 4px;

  margin-bottom: 1rem;
  h6 {
    margin-bottom: 1rem;
  }
  .commentList {
    width: 100%;
    display: flex;
    flex-direction: column;    
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const CommentSection = styled.section`
  width: 63.4%;
  height: 300px;
  padding: 2rem 2rem 2rem 2rem;
  background: var(--colors-white);
  border-radius: 4px;
  position: relative;

  textarea {
    width: 100%;
    height: 60%;
    border: 1.5px solid var(--colors-grey-7);
    border-radius: 4px;
    resize: none;
    font-family: var(--font-inter);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--colors-grey-2);
    padding: 1rem 1rem 1rem 1rem;
    margin-bottom: 15px;
    outline-color: transparent;
    transition: 0.2s;

    &:focus {
      outline-color: var(--colors-brand-1);
    }
  }

  button {
    position: absolute;
    right: 50px;
    top: 185px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    gap: 10px;
    cursor: pointer;

    width: 15%;
    min-width: 70px;
    height: 2.375rem;

    border-radius: 4px;
    font-weight: 600;
    font-family: var(--font-inter);
    transition: 0.2s;

    color: var(--colors-white);
    background: var(--colors-brand-1);
    border: 1.5px solid var(--colors-brand-1);

    &:hover {
      background-color: var(--colors-brand-2);
    }

  }
  
  .button-able {
    color: var(--colors-white);
    background: var(--colors-brand-1);
    border: 1.5px solid var(--colors-brand-1);
    
    &:hover {
      background-color: var(--colors-brand-2);
    }
  }

  .button-disabled {
    color: #ffff;
    background: #ced4da;
    border: 1.5px solid #ced4da;
    cursor: not-allowed;
  }
  .userInfoComment {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1.75rem;

    .userBallComment {
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
    .nameComment {
      margin-right: 0.5rem;
      font-family: var(--font-inter);
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: var(--colors-grey-1);
    }
  }

  .suggestions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 401px;
    width: 100%;

    p {
      margin-right: 5px;
      background-color: #e9ecef;
      color: #868e96;
      font-family: var(--font-inter);
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      border-radius: 50px;
      text-align: center;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background-color: #ced4da;
      }
    }

    #suggestion-one {
      width: 101px;
    }

    #suggestion-two {
      width: 66px;
    }

    #suggestion-three {
      width: 218px;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    button {
      top: 250px;
      left: 31px;
    }
  }

  .comments-fixed{
    display: flex;
    justify-content: row;
    gap: 5px;    

    @media screen and (max-width:1000px) {
    justify-content: end;
    }
    @media screen and (max-width:630px) {
    display: none;
    }
  }
`;

export const BoxComment = styled.div`
  width: 63.5%;
  height: 100px;
  padding: 2rem 2rem 2rem 2rem;
  background: var(--colors-white);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`

export const CommentsFixed = styled.span`
  background-color: var(--colors-grey-7);
  color: var(--colors-grey-3);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;

  padding: 0 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;

  @media screen and (max-width:1100px) {
    font-size: 11px;
  }
  
`

export const CommentSectionOffline = styled.section`
  width: 63.4%;
  height: 300px;
  padding: 4rem 2rem 2rem 2rem;
  background: var(--colors-white);
  border-radius: 4px;
  position: relative;

  textarea {
    width: 100%;
    height: 60%;
    border: 1.5px solid var(--colors-grey-7);
    border-radius: 4px;
    resize: none;
    font-family: var(--font-inter);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--colors-grey-2);
    padding: 1rem 1rem 1rem 1rem;
  }

  button {
    position: absolute;
    right: 50px;
    top: 140px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    gap: 10px;

    width: 15%;
    min-width: 70px;
    height: 2.375rem;

    color: var(--colors-grey-2);
    background: var(--colors-grey-7);
    border: 1.5px solid var(--colors-grey-7);
    border-radius: 4px;
  }
  .userInfoComment {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1.75rem;

    .userBallComment {
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
    .nameComment {
      margin-right: 0.5rem;
      font-family: var(--font-inter);
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: var(--colors-grey-1);
    }
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    button {
      top: 200px;
      left: 31px;
    }
  }

  .comments-fixed{
    display: flex;
    justify-content: row;
    gap: 5px;

    

    @media screen and (max-width:1000px) {
    justify-content: end;
    }
    @media screen and (max-width:630px) {
    display: none;
    }
  }
`;