import { Component } from 'react';
import { Container } from './Container.styled';

import { Searchbar } from './Searchbar/Searchbar';
import { ButtonLoader } from './ButtonLoader/ButtonLoader';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { ThreeDots } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import { fetchImages } from './api';

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

        this.setState({ isLoading: true });
        const response = await fetchImages(newSearchQuery, page);

        // this.setState({
        //   images: response.hits,
        //   isLoading: false,
        // });

        this.setState({
          images: [...images, ...response.hits],
          isLoading: false,
        });

        // this.setState(state => ({
        //   images: [...response.hits, ...state.images],
        //   isLoading: false,
        // }));

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
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />

        {error && (
          <b>Oops! Something went wrong! Please try reloading this page!</b>
        )}
        <ImageGallery items={images} />
        {isLoading && (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#3f51b5"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClass=""
          />
        )}
        {loadmore && Boolean(images.length) && (
          <ButtonLoader onClick={this.handleLoadMore} />
        )}
        <Toaster />
      </Container>
    );
  }
}
