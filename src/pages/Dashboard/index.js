import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format, subMonths } from 'date-fns';
import api from '../../services/api';

import { formatPrice } from '../../util/format';

import {
  Container,
  Navbar,
  Aside,
  Info,
  Filter,
  List,
  Entry,
  Button,
} from './styles';
import logo from '../../assets/logo-ewally.png';

export default class Dashboard extends Component {
  state = {
    loading: true,
    balance: null,
    statements: [],
    initialDate: subMonths(new Date(), 8),
    finalDate: new Date(),
  };

  async componentDidMount() {
    const { initialDate, finalDate } = this.state;

    this.setState({ loading: true });

    const token = JSON.parse(localStorage.getItem('tokenEwally'));
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await Promise.all([
        api.get('/account/balance'),
        api.get(
          `/b2b/statement/?initialDate=${format(
            initialDate,
            'YYYY-MM-DD'
          )}&finalDate=${format(finalDate, 'YYYY-MM-DD')}`
        ),
      ]);

      this.setState({
        loading: false,
        balance: response[0].data.balance,
        statements: response[1].data.statement,
      });
    }
  }

  handleFilter = async () => {
    const { initialDate, finalDate } = this.state;
    this.setState({ statements: [], loading: true });
    const response = await Promise.all([
      api.get('/account/balance'),
      api.get(
        `/b2b/statement/?initialDate=${format(
          initialDate,
          'YYYY-MM-DD'
        )}&finalDate=${format(finalDate, 'YYYY-MM-DD')}`
      ),
    ]);

    this.setState({
      loading: false,
      balance: response[0].data.balance,
      statements: response[1].data.statement,
    });
  };

  render() {
    const { balance, loading, statements, initialDate, finalDate } = this.state;
    return (
      <>
        <Navbar className="container">
          <img src={logo} alt="logo" />
          <Link to="/">Logout</Link>
        </Navbar>
        <Container>
          <Aside>
            <p>
              <strong>Saldo:</strong>
            </p>
            {balance ? (
              <p>{formatPrice(balance / 100)}</p>
            ) : (
              <p>Carregando...</p>
            )}
          </Aside>
          <Info>
            <p>Extrato:</p>
            <Filter>
              <input
                placeholder="DE:"
                type="date"
                value={format(initialDate, 'YYYY-MM-DD')}
                onChange={e => {
                  this.setState({ initialDate: e.target.value });
                }}
              />
              <input
                placeholder="ATÉ:"
                type="date"
                value={format(finalDate, 'YYYY-MM-DD')}
                onChange={e => {
                  this.setState({ finalDate: e.target.value });
                }}
              />
              <Button type="button" onClick={this.handleFilter}>
                Filtrar
              </Button>
              {loading && <p>Carregando dados...</p>}
            </Filter>
            <List>
              <div>
                <strong>Data</strong>
                <strong>Tipo de Transação</strong>
                <strong>Valor</strong>
              </div>
              {statements.length > 0 ? (
                statements.map(s => (
                  <Entry key={s.id}>
                    <p>{format(s.createdAt, 'DD/MM/YYYY HH:mm')}</p>
                    <p>{s.operationType}</p>
                    <p className={`value ${s.amount <= 0 && 'redColor'}`}>
                      {formatPrice(s.amount / 100)}
                    </p>
                    {s.amount < 0}
                  </Entry>
                ))
              ) : (
                <div>Nenhuma dado a ser mostrado!</div>
              )}
            </List>
          </Info>
        </Container>
      </>
    );
  }
}
