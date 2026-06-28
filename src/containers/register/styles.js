import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../assets/background.png';
import BackgroundLogin from '../../assets/bgLogin.png';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh; /* 👈 Garante que o fundo estique se o conteúdo crescer */
  background: url(${Background}); 
  background-size: cover;
  background-position: center;
`;

export const LeftContainer = styled.div`
  background: url(${BackgroundLogin});
  background-size: cover;
  background-position: center;

  min-height: 100vh;
  width: 100%;
  max-width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;
  
  max-width: 50%;

  background: url(${Background});
  background-color: #1e1e1e;
  color: ${props => props.theme.white};

  p {
    color: ${props => props.theme.white};
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: ${props => props.theme.purple};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  overflow-y: auto;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding-left: 10px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.white};
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${props => props.theme.white};
`;
