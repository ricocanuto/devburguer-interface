import { Navigate, Outlet } from 'react-router-dom';
import { SideNavAdmin } from '../../components';
import { Container } from './styles';

export function AdminLayout() {
  const userData = JSON.parse(localStorage.getItem('devburguer:userData'));

  if (!userData) {
    return <Navigate to="/login" />;
  }

  const { admin: isAdmin } = userData;

  return isAdmin ? (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
