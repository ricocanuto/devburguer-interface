import styled from 'styled-components';

/* Wrapper com overflow para a tabela não "vazar" em mobile */
export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 12px;
  background-color: ${props => props.theme.white};
 
  /* Scrollbar sutil */
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.purple};
    border-radius: 3px;
  }
`;

export const ProductImage = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 8px;
 
  @media (max-width: 768px) {
    height: 44px;
    width: 44px;
  }
  `;
export const ButtonGroup = styled.div`
display: flex;
align-items: center;
gap: 12px;


button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: ${props => props.theme.white};
    border-radius: 4px;
    background-color: ${props => props.theme.purple};
    transition: all 0.4s;
    border: none;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
        background: ${props => props.theme.seconddarkpurple};
    }
}`;
export const EmptyCart = styled.p`
font-size: 20px;
text-align: center;
font-weight: bold;
padding: 40px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 24px 0;
  }
`;

export const ProductTotalPrice = styled.p`
font-weight: bold;
white-space: nowrap;
`;

export const TrashImage = styled.img`
height: 20px;
width: 20px;
cursor: pointer;
flex-shrink: 0;
`;