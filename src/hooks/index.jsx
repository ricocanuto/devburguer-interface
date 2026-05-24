import { CartProvider } from './CartContext';
import { UserProvider } from './UserContext'; // Se você já tiver o UserContext

export const AppProvider = ({ children }) => {
  return <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>

};

export default AppProvider;