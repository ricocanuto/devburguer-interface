import { Navigate, Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';
import { useUser } from '../../hooks/UserContext';

export function UserLayout() {
    // 1. Busca os dados do usuário salvos no navegador (ajuste a chave se o nome for diferente)
    const { userData } = useUser();

    // 2. Se não houver dados de usuário, barra o acesso e joga direto para o Login
    if (!userData) {
        return <Navigate to="/login" replace />;
    }

    // 3. Se estiver logado, exibe a estrutura normal do site com os componentes filhos
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}