import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

// import DefaultInput from '~/components/inputs';
// import CustomCard from '~/components/cards';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('Insira um e-mail válido')
//     .required('O e-mail é obrigatório'),
//   password: Yup.string().required('A senha é obrigatória'),
// });

export default function SignIn() {
  // const dispatch = useDispatch();
  // const loading = useSelector(state => state.auth.loading);

  // function handleSubmit({ email, password }) {
  //   dispatch(signInRequest(email, password));
  // }

  return (
    <div className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center no-gutters min-vh-100">
        <div className="col-12 col-md-5 col-lg-4 py-8 py-md-11">
          <h1 className="font-bold text-center">Resetar a senha</h1>

          <p className="text-center mb-6">
            Digite seu e-mail para resetar a senha.
          </p>

          <form className="mb-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                placeholder="Digite seu e-mail"
              />
            </div>

            <button className="btn btn-lg btn-block btn-primary" type="submit">
              ENVIAR
            </button>
          </form>

          <p className="text-center">
            Já possui uma conta? <Link to="/">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
