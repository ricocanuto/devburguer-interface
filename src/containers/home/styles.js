import styled from 'styled-components';
import Background from '../../assets/background.png';
import BannerHome from '../../assets/banner-home.png';

export const Container = styled.section`
  background: linear-gradient(
    rgba(255, 255, 255, 0.5), 
    rgba(255, 255, 255, 0.5)
  ), 
    url('${Background}');
  width: 100%;
  min-height: 100vh;
  background-size: cover;      
  background-position: center;
`;

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;
  position: relative; /* Garante o contexto para o absolute do h1 */

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: ${props => props.theme.white};
    position: absolute;
    right: 20%;
    top: 10%;
  }

  @media (max-width: 768px) {
    height: 250px; /* Reduz a altura do banner no celular */

    h1 {
      font-size: 40px; /* Reduz o tamanho da fonte do h1 */
      right: 50%;
      top: 50%;
      transform: translate(50%, -50%); /* Centraliza o título no meio do banner */
      text-align: center;
      width: 100%;
      padding: 0 20px;
    }
  }
`;