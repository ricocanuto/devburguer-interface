import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api.js';
import { formatPrice } from '../../utils/formatPrice';


import {
  Banner,
  CategoryButton,
  CategoryMenu,
  Container,
  ProductsContainer,
} from './styles.js';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(0);
  const categoryId = +queryParams.get('category');

  
  useEffect(() => {
    setActiveCategory(categoryId);
  }, [categoryId]);

  useEffect(() => {
  async function loadCategories() {
    try {
      const { data } = await api.get('/categories');
      const newCategories = [{ id: 0, name: 'Todas' }, ...data];
      setCategories(newCategories);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  }

  async function loadProducts() {
    try {
      const { data } = await api.get('/products');
      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));
      setProducts(newProducts);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  }

  loadCategories();
  loadProducts();
}, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );

      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTÁ AQUI!
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>
      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?category=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>
      <ProductsContainer>
        {filteredproducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
