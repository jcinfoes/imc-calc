import styled from 'styled-components'

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto 20px;
  user-select: none;

  header {
    margin: 20px 0;
    img {
      width: 150px;
    }
  }

  main {
    display: flex;
    gap: 40px;

    .left-side {
      flex: 1;

      h1 {
        font-size: 40px;
        color: #3a4b5c;
      }

      p {
        font-size: 16px;
        margin-bottom: 40px;
        color: #6a7d8b;
      }

      input {
        display: block;
        width: 100%;
        outline: 0;
        border: 0;
        border-bottom: 2px solid rgba(150,163,171,.5);
        padding: 10px 2px;
        margin-bottom: 20px;
        font-size: 14px;
        &:disabled{
          color:silver;
        }
      }

      .error {
        height: 20px;
        display: grid;
        place-items: center;
        color: #c3423f;
      }

      button {
        background-color: #227c9d;
        color: #fff;
        font-size: 16px;
        outline: 0;
        border: 0;
        border-radius: 8px;
        padding: 15px 0;
        width: 100%;
        cursor: pointer;
        margin-top: 20px;
        transition: all ease .2s;

        &:hover {
          opacity: .9;
        }

        &:disabled{
          opacity: .5;
        }
      }
    }

    .right-side {
      flex: 1;
      display: flex;

      .grid {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .rightBig {
        flex: 1;
        display: flex;      
      }

      .rightArrow {
        position: absolute;
        background-color: #227c9d;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        cursor: pointer;
        margin-left: -35px;
        margin-top: 145px;
        transition: all ease .2s;
        &:hover {
          background-color: #3488a7;
        }
      }
    }

    @media (max-width: 785px) {
      flex-direction: column;
      
      .right-side .rightArrow {
        margin-left: 0;
        margin-top: -25px;

        img {
          transform: rotate(90deg);
        }
      }
    }

    @media (max-width: 520px) {
      .right-side .grid {
        grid-template-columns: 1fr;
      }
    }
  }

  @media (max-width: 930px) {
      padding: 0 15px;
    }
`
