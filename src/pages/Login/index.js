import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import api from '../../services/api';

import { Form, Input, Button } from './styles';
import logo from '../../assets/logo-ewally.png';

export default class Main extends Component {
  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
  };

  state = {
    username: 'testFrontEwally',
    password: '123456',
    loading: false,
    error: false,
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: false });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { history } = this.props;
    this.setState({ loading: true });
    const { username, password } = this.state;
    const data = JSON.stringify({ username, password });
    const response = await api.post('/user/login', data);
    if (response.status === 200) {
      localStorage.setItem('tokenEwally', JSON.stringify(response.data.token));
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      history.push('/dashboard');
    }
  };

  render() {
    const { username, password, error, loading } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <img src={logo} alt="logo" />
        <h1>Acesse sua Carteira</h1>
        <Input
          placeholder="Usuário"
          name="username"
          value={username}
          onChange={this.handleInputChange}
          error={error ? 1 : 0}
          loading={loading ? 1 : 0}
        />
        <Input
          placeholder="Senha"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          type="password"
          error={error ? 1 : 0}
          loading={loading ? 1 : 0}
        />
        <Button loading={loading ? 1 : 0}>
          {loading ? 'Aguarde' : 'Login'}
        </Button>
      </Form>
    );
  }
}
