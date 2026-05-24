import styled from 'styled-components';

export const Container = styled.div`
  .react-multiple-carousel__arrow {
    background: rgba(0, 0, 0, 0.5); 
    min-width: 43px;
    min-height: 43px;
    border-radius: 50%; 
    z-index: 10;
  }
  .carousel-item {
    padding-right: 40px;
  }
  position: relative;
  overflow-x: hidden;

  .react-multiple-carousel__arrow--left {
    left: 5px;
    top: 0;
    
}
.react-multiple-carousel__arrow--right {
    top: 0;

}

  .react-multi-carousel-list {
    overflow: visible;
  }

  padding-left: 40px;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${props => props.theme.green};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61a120;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CardProduct = styled.div`
  background-image: url(${(props) => props.$imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 40px;
  color: ${props => props.theme.white};
  display: flex;
  padding: 20px 10px;
  width: 273px;
  height: 222px;
  margin-top: 1000px;
  margin-left: 700px;
  left: 734px;
  opacity: 1;
  box-shadow: 0px 4px 50px 0px #00000026;

`;