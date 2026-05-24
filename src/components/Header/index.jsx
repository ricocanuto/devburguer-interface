import { ShoppingCartIcon, UserCircle } from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';

import {
  CartBadge,
  CartIconWrapper,
  Container,
  Content,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { cartCount } = useCart();

  const { pathname } = useResolvedPath();

  function logoutUser() {
    logout();
    navigate('/login');
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === '/'}>
              Home
            </HeaderLink>
            <hr></hr>
            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color="#${props} => props.theme.white" size={24} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            {/* ✅ Badge do contador */}
            <CartIconWrapper>
              <ShoppingCartIcon color="#${props} => props.theme.white" size={24} />
              {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
            </CartIconWrapper>
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
