import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
`;

export const SignupImgDiv = styled.div`
  background-color: #f8f2dc;
  width: 40%;

  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const LogoDiv = styled.div`
  margin-top: 50px;
  margin-left: 40px;
`;
export const DownImgDiv = styled.div`
  width: 10%;
  height: 10%;
`;

export const SignupDiv = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  flex-direction: column;
  // background-color: green;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SignInContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;

  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SignIn = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #0a090b;
  margin-bottom: 40px;
`;
