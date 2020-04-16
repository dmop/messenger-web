import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: Yup.string()
        .min(6, 'No mínimo 6 caracteres')
        .required('A senha é obrigatória'),
    }),
    onSubmit: ({ name, email, password }) => {
      dispatch(signUpRequest(name, email, password));
    },
  });

  return (
    <div className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center no-gutters min-vh-100">
        <div className="col-12 col-md-5 col-lg-4 py-8 py-md-11">
          <h1 className="font-bold text-center">Cadastrar</h1>
          <p className="text-center mb-6">Bem vindo ao messenger web</p>
          <form className="mb-6" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                id="name"
                placeholder="Digite seu nome"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                placeholder="Digite seu e-mail"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                placeholder="Digite sua senha"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>

            <button className="btn btn-lg btn-block btn-primary" type="submit">
              CADASTRAR
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
