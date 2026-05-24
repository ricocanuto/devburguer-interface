import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 35px;

  overflow-x: hidden;

  .react-multiple-carousel__arrow--left {
    left: 5px;
    top: 0;
  }
  .react-multiple-carousel__arrow--right {
    right: 50px;
    top: 0;
  }
  .react-multi-carousel {
    overflow: visible;
  }
  .carousel-item {
    padding-right: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${props => props.theme.purple};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${props => props.theme.purple};
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CategoryButton = styled(Link)`
  color: ${props => props.theme.white};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: 500;
  margin-top: 120px;
  text-decoration: none;
  width: 80%;
  height: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerItems = styled.div`
  background-image: url(${(props) => props.$imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  width: 100%;
  height: 200px;
  padding: 10px;
  cursor: grab;
`;

