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
  `;
  export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
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
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;
`;
