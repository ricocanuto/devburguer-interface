import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 50px;
padding: 20px;
border-radius: 28px;
background-color: ${props => props.theme.white};
cursor: grab;
box-shadow: rgba(0, 0, 0,  0.35) 0px 5px 15px;
position: relative;

    div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    }

    p {
    font-size: 18px;
    color: ${props => props.theme.orange};
    line-height: 20px;
    min-height: 68px;
    font-weight: 700;
    margin-top: 100px;
    text-align: center;
    justify-content: center;
    padding-top: 30px;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    }

    strong {
        margin-top: 30px;
        font-size: 22px;
        color: ${props => props.theme.black};
        font-weight: 800;
        line-height: 10px;        
    }
`

export const CardImage = styled.img`
   height: 100px;
   width: 140px;
   position: absolute;    
   top: -50px;
   padding-top: 10px;
   padding-bottom: 10px;
   object-fit: cover;
   object-position: center;
   border-radius: 50%;
   display: block;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`;