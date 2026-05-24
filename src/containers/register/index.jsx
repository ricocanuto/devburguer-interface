import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { api } from '../../services/api';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles';

import Logo from '../../assets/logo.png';

import { Button } from '../../components/Button/index';

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup
        .string()
        .email('Email inválido')
        .required('Email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve conter no mínimo 6 caracteres')
        .required('Senha é obrigatória'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
      zip_code: yup.string().min(8, 'CEP inválido').required('CEP é obrigatório'),
      street: yup.string().required('Rua é obrigatória'),
      number: yup.string().required('Número é obrigatório'),
      neighborhood: yup.string().required('Bairro é obrigatório'),
      city: yup.string().required('Cidade é obrigatória'),
      state: yup.string().required('Estado é obrigatório'),
    })
    .required();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCepBlur = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length !== 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setValue('street', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('state', data.uf);
      } else {
        toast.error('CEP não encontrado');
      }
    } catch {
      toast.error('Erro ao buscar CEP');
    }
  };

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
          street: data.street,
          number: data.number,
          neighborhood: data.neighborhood,
          city: data.city,
          state: data.state,
          zip_code: data.zip_code,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        toast.success('Conta criada com sucesso!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else if (status === 409) {
        toast.error('Email já cadastrado! Faça o login para continuar');
      } else {
        throw new Error();
      }
    } catch {
      toast.error('Falha no sistema! Tente novamente');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo-devburguer" />
      </LeftContainer>

      <RightContainer>
        <Title>Criar conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" {...register('name')} />
            <span>{errors?.name?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register('email')} />
            <span>{errors?.email?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input id="password" type="password" {...register('password')} />
            {errors?.password && <span>{errors.password.message}</span>}
          </InputContainer>

          <InputContainer>
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              id="confirmPassword"
              type="password"
              {...register('confirmPassword')}
            />
            {errors?.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </InputContainer>

          <InputContainer>
            <label htmlFor="zip_code">CEP</label>
            <input
              id="zip_code"
              type="text"
              maxLength={8}
              placeholder="Somente números"
              {...register('zip_code')}
              onBlur={handleCepBlur}
            />
            <span>{errors?.zip_code?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="street">Rua</label>
            <input id="street" type="text" {...register('street')} />
            <span>{errors?.street?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="number">Número</label>
            <input id="number" type="text" {...register('number')} />
            <span>{errors?.number?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="neighborhood">Bairro</label>
            <input id="neighborhood" type="text" {...register('neighborhood')} />
            <span>{errors?.neighborhood?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="city">Cidade</label>
            <input id="city" type="text" {...register('city')} />
            <span>{errors?.city?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="state">Estado</label>
            <input id="state" type="text" maxLength={2} {...register('state')} />
            <span>{errors?.state?.message}</span>
          </InputContainer>

          <Link style={{ color: '#${props} => props.theme.white' }} to="/login">
            Esqueci minha senha
          </Link>

          <Button type="submit">Criar conta</Button>
        </Form>

        <p>
          Já possui conta?
          <Link
            style={{
              color: '#3744f5',
              textDecoration: 'underline',
              marginLeft: '5px',
            }}
            to="/login"
          >
            Clique aqui.
          </Link>
        </p>
      </RightContainer>
    </Container>
  );
}
