import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51TVCtsRnT3SMxYZZYcHjh1eeOHYyz3q0JgErPvvcU75JFaUk2LHerDCgVyhn4ar9ZC4Vf5JxatQh34GRdSkSTg7s00zeeWZtWq'
);

export default stripePromise;