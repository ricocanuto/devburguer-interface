import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});

// Helper para salvar no localStorage
const saveCart = (products) => {
  localStorage.setItem('devburguer:cartInfo', JSON.stringify(products));
};

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

    // ✅ Contador total de itens no carrinho
  const cartCount = cartProducts.reduce((acc, prd) => acc + prd.quantity, 0);

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
    let newCartProducts = [];

    if (cartIndex >= 0) {
      newCartProducts = [...cartProducts];
      newCartProducts[cartIndex].quantity += 1;
      setCartProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
    }

      setCartProducts(newCartProducts);
      saveCart(newCartProducts);
    };

  useEffect(() => {
      const clientCartData = localStorage.getItem('devburguer:cartInfo');
      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
  }, []);

  const clearCart = () => {
    setCartProducts([]);
    saveCart([]);
  };

  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId);
    setCartProducts(newCart);
    saveCart(newCart);
  };

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
    });
    setCartProducts(newCart);
    saveCart(newCart);
  };

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd;
      });
      setCartProducts(newCart);
      saveCart(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        cartCount,
        clearCart,
        decreaseProduct,
        increaseProduct,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node,
};