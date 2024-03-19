import { Component } from 'react';
import { Container } from './Container.styled';

import { Searchbar } from './Searchbar/Searchbar';
import { ButtonLoader } from './ButtonLoader/ButtonLoader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loading } from './Loading/Loading';

import toast, { Toaster } from 'react-hot-toast';

import { fetchImages } from '../api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: false,
    loadmore: true,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query, images } = this.state;
    try {
      if (prevState.query !== query || prevState.page !== page) {
        const indexOfSlash = query.indexOf('/');
        const newSearchQuery = query.slice(indexOfSlash + 1);

        this.setState({ isLoading: true, loadmore: false });
        const response = await fetchImages(newSearchQuery, page);

        this.setState({
          images: [...images, ...response.hits],
          isLoading: false,
          loadmore: true,
        });

        if (images.length === response.totalHits) {
          toast.error('Sorry, thats all we got!');
          this.setState({ loadmore: false });
        } else {
          this.setState({ loadmore: true });
        }
      }
    } catch (error) {
      this.setState({ isLoading: false, error: true });
      toast.error('You catch an Error!');
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const searchQuery = e.target.input.value;

    this.setState({
      query: `${Date.now()}/${searchQuery}`,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, error, isLoading, loadmore } = this.state;
    const isListEmpty = Boolean(images.length);

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {error && (
          <b>Oops! Something went wrong! Please try reloading this page!</b>
        )}
        {isListEmpty && <ImageGallery items={images} />}
        <Loading isVisible={isLoading} />
        {loadmore && isListEmpty && (
          <ButtonLoader onClick={this.handleLoadMore} />
        )}
        <Toaster />
      </Container>
    );
  }
}
