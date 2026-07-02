import { Navigate, Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';

export function UserLayout() {
    // Busca direto os dados salvos no navegador no momento do login
    const userData = JSON.parse(localStorage.getItem('devburguer:userData'));

    // Se não existir o usuário no localStorage, barra e redireciona
    if (!userData) {
        return <Navigate to="/login" replace />;
    }

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