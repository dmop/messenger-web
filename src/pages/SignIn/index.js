import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import MessengerSvg from '~/assets/svg/mensageiro.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido.')
        .required('Campo obrigatório'),
      password: Yup.string().required('Campo obrigatório'),
    }),
    onSubmit: ({ email, password }) => {
      dispatch(signInRequest(email, password));
    },
  });

  return (
    <div className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center no-gutters min-vh-100">
        <div className="col-12 col-md-5 col-lg-4 py-8 py-md-11">
          <div className="text-center">
            <img
              className="avatar-img avatar-login"
              src={MessengerSvg}
              alt="Messenger"
            />
          </div>
          <p className="text-center mb-6">Bem vindo ao Messenger Web</p>
          <form className="mb-6" onSubmit={formik.handleSubmit}>
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

            <div className="form-group d-flex justify-content-between">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="remember"
                  onChange={formik.handleChange}
                  value={formik.values.remember}
                />
                <label className="custom-control-label" htmlFor="remember">
                  Lembrar
                </label>
              </div>
              <Link to="/forgot-password">Esqueci a senha</Link>
            </div>

            <button className="btn btn-lg btn-block btn-primary" type="submit">
              {loading ? 'Carregando...' : 'ENTRAR'}
            </button>
          </form>
          <p className="text-center">
            Não possui uma conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
