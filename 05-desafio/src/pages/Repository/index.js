/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/static-property-placement */
import React from 'react';
import ProptTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {
  Loading,
  Owner,
  IssueList,
  Filters,
  PageControl,
  LeftArrow,
  RightArrow,
} from './styles';
import Container from '../../components/Container';

// import { Container } from './styles';

export default class Repository extends React.Component {
  static propTypes = {
    match: ProptTypes.shape({
      params: ProptTypes.shape({
        repository: ProptTypes.string,
      }),
    }).isRequired,
  };

  constructor() {
    super();
    this.state = {
      repository: {},
      issues: [],
      loading: true,
      filter: 'all',
      pageIssues: 1,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { filter, pageIssues } = this.state;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues?page=${pageIssues}`, {
        params: { state: filter },
      }),
    ]);
    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  async componentDidUpdate(_, prevState) {
    const { filter, pageIssues } = this.state;
    const { match } = this.props;
    if (prevState.filter !== filter || prevState.pageIssues !== pageIssues) {
      const repoName = decodeURIComponent(match.params.repository);
      this.setState({ loading: true });
      const response = await api.get(
        `/repos/${repoName}/issues?page=${pageIssues}`,
        {
          params: { state: filter },
        }
      );
      this.setState({
        issues: response.data,
        loading: false,
      });
    }
  }

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  handleChangePage = nextprev => {
    const { pageIssues } = this.state;

    if (!(nextprev === -1 && pageIssues === 1)) {
      this.setState({ pageIssues: Number(pageIssues) + Number(nextprev) });
    }
  };

  render() {
    const { repository, issues, loading, filter, pageIssues } = this.state;
    if (loading) {
      return <Loading>Carregando</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssueList>
          <Filters>
            <button
              className={filter === 'all' ? 'selected' : ''}
              onClick={() => this.handleChangeFilter('all')}
              type="button"
            >
              All
            </button>
            <button
              className={filter === 'open' ? 'selected' : ''}
              onClick={() => this.handleChangeFilter('open')}
              type="button"
            >
              Open
            </button>
            <button
              className={filter === 'closed' ? 'selected' : ''}
              onClick={() => this.handleChangeFilter('closed')}
              type="button"
            >
              Closed
            </button>
          </Filters>
          <PageControl>
            <LeftArrow
              size={32}
              color="#7159c1"
              page={String(pageIssues)}
              onClick={() => this.handleChangePage(-1)}
            />
            <strong>{pageIssues}</strong>
            <RightArrow
              size={32}
              color="#7159c1"
              onClick={() => this.handleChangePage(1)}
            />
          </PageControl>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
