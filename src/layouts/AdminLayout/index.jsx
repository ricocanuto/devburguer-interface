import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { SideNavAdmin } from '../../components';
import { Container } from './styles';

export function AdminLayout() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Só roda no navegador, evitando erros de hidratação (hydration errors)
    const userData = localStorage.getItem('devburguer:userData');
    
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Erro ao ler dados do usuário", error);
        localStorage.removeItem('devburguer:userData'); // Limpa se estiver corrompido
      }
    }
    setLoading(false);
  }, []);

  // Enquanto estiver lendo o localStorage, exibe uma tela vazia ou um loading
  if (loading) {
    return null; 
  }

  // Se não encontrou usuário ou se não for admin, chuta direto para o login
  if (!user || !user.admin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  );
}