import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';
import { Button } from '../../Button';

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { cartProducts, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      toast.error(error.message);
      setIsLoading(false);
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      const products = cartProducts.map((product) => ({
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      }));

      try {
        await api.post('/orders', { products }, { validateStatus: () => true });
        toast.success('Pedido Realizado com Sucesso!');
        clearCart();
        setTimeout(() => navigate('/'), 2000);
      } catch {
        toast.error('Erro ao registrar pedido');
      }
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isReady && <p>Carregando formulário de pagamento...</p>}
      <PaymentElement onReady={() => setIsReady(true)} />
      {isReady && (
        <Button type="submit" disabled={!stripe || isLoading}>
          {isLoading ? 'Processando...' : 'Confirmar Pagamento'}
        </Button>
      )}
    </form>
  );
}