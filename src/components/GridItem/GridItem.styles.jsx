import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 10px;
  padding: 20px;

  .icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 40px;
      height: auto;
    }
  }

  h3 {
    font-size: 23px;
    font-weight: bold;
    margin-top: 5px;
  }

  h4{
    font-size: 17px;
    margin: 10px 0 50px 0;

    strong {
      color: #c7edff;
    }
  }

  p {
    font-size: 13px;
    margin-top: 14px;
  }
`