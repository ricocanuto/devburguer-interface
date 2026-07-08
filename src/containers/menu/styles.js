import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../assets/background.png';
import BannerHamburguer from '../../assets/banner.png';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.white};
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('${Background}');
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: url('${BannerHamburguer}') no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${props => props.theme.mainBlack};
  height: 480px;
  position: relative;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: ${props => props.theme.darkWhite};
    position: absolute;
    line-height: 60px;
    right: 20%;
    top: 30%;

    span {
      display: block;
      color: ${props => props.theme.white};
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    height: 250px; /* Reduz a altura do banner no mobile */

    h1 {
      font-size: 40px; /* Reduz o tamanho da fonte do h1 */
      line-height: 35px;
      right: 50%;
      top: 50%;
      transform: translate(50%, -50%); /* Centraliza perfeitamente no mobile */
      text-align: center;
      width: 100%;
      padding: 0 10px;

      span {
        font-size: 14px;
      }
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;

  @media (max-width: 768px) {
    gap: 15px; /* Reduz o espaçamento no mobile */
    padding: 10px;
    flex-wrap: wrap; /* Faz os botões irem para a linha de baixo se não couberem */
  }
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  color: ${(props) => (props.$isActiveCategory ? props.theme.purple : props.theme.darkGray)};
  border-bottom: ${(props) => props.$isActiveCategory && `4px solid ${props.theme.purple}`};
  
  &:hover {
    color: ${props => props.theme.purple};
  }

  @media (max-width: 768px) {
    font-size: 18px; /* Diminui o texto dos botões no mobile */
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em tablets */
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 única coluna bem distribuída no celular */
    padding: 20px;
    gap: 20px;
    margin: 20px auto;
  }
`;