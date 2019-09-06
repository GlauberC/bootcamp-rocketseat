/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Form, SubmitButton, List, RepoInput } from './styles';
import Container from '../../components/Container';

import api from '../../services/api';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      newRepo: '',
      loading: false,
      repositories: [],
      invalidRepo: false,
    };
  }

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, invalidRepo: false });
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();
      this.setState({ loading: true });
      const { newRepo, repositories } = this.state;
      const response = await api.get(`/repos/${newRepo}`);
      const data = {
        name: response.data.full_name,
      };
      const sameRepo = repositories.find(repo => repo.name === data.name);
      if (sameRepo) {
        throw new Error(
          'The repository already is in the list of repositories'
        );
      }
      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
      });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false, invalidRepo: true });
    }
  };

  render() {
    const { newRepo, loading, repositories, invalidRepo } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <RepoInput
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
            error={invalidRepo}
          />
          <SubmitButton loading={String(loading)}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
