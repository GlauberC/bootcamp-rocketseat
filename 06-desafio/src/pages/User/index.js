import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

// import { Container } from './styles';

export default class User extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  constructor() {
    super();
    this.state = {
      stars: [],
      pageStars: 1,
      loading: true,
      loadingEnd: false,
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const { pageStars } = this.state;
    const user = navigation.getParam('user');
    const response = await api.get(
      `/users/${user.login}/starred?page=${pageStars}`
    );
    this.setState({ stars: response.data, loading: false });
  }

  loadMore = async () => {
    const { navigation } = this.props;
    const { pageStars, stars } = this.state;
    this.setState({ loadingEnd: true });
    const user = navigation.getParam('user');
    const response = await api.get(
      `/users/${user.login}/starred?page=${pageStars + 1}`
    );
    this.setState({
      stars: [...stars, ...response.data],
      pageStars: pageStars + 1,
      loadingEnd: false,
    });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, loadingEnd } = this.state;
    const user = navigation.getParam('user');
    return (
      <>
        <Container>
          <Header>
            <Avatar source={{ uri: user.avatar }} />
            <Name>{user.name}</Name>
            <Bio>{user.bio}</Bio>
          </Header>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Stars
              onEndReachedThreshold={0.2}
              onEndReached={this.loadMore}
              data={stars}
              keyExtractor={star => String(star.id)}
              renderItem={({ item }) => (
                <Starred>
                  <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                  <Info>
                    <Title>{item.name}</Title>
                    <Author>{item.owner.login}</Author>
                  </Info>
                </Starred>
              )}
            />
          )}
          {loadingEnd && <ActivityIndicator />}
        </Container>
      </>
    );
  }
}
