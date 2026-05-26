// CartResume/styles.js
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  overflow: hidden; /* garante que o título respeite o border-radius */

  * {
    color: ${props => props.theme.secondblack};
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';
    row-gap: 12px;

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 8px;
      background-color: ${props => props.theme.secondblack};
      color: ${props => props.theme.white} !important;
      width: 100%;
      padding: 15px;
      text-align: center;
    }

    .items {
      grid-area: items;
      padding-left: 20px;
    }

    .items-price {
      grid-area: items-price;
      padding-right: 20px;
      text-align: right;
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;
      padding-bottom: 12px;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-right: 20px;
      text-align: right;
      padding-bottom: 12px;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    padding: 16px 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);

    * {
      font-weight: 700;
    }
  }

  /* Em mobile, o CartResume fica abaixo do CartItems (já garantido pelo grid do Content),
     mas ajustamos fontes e espaçamentos */
  @media (max-width: 768px) {
    .container-top {
      .title {
        font-size: 17px;
        padding: 12px;
      }
    }

    .container-bottom {
      font-size: 17px;
    }
  }
`;