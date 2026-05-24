import styled from 'styled-components';

import Background from '../../assets/background.png';
import BannerHome from '../../assets/banner-home.png';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: ${props => props.theme.white};
    position: absolute;
    right: 20%;
    top: 10%;
  }
`;

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

