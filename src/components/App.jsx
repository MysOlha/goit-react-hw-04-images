import React, { Component } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';

const APIURL = 'https://pixabay.com/api';
const KEY = '29767436-14c23983d91939ba59ac81ecb';
class App extends Component {
  state = {
    imageName: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
    perPage: 12,
  };

  getImages = () => {
    this.setState({ loading: true });
    axios
      .get(
        `${APIURL}/?key=${KEY}&q=${this.state.imageName}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
      )
      .then(res =>
        this.setState(({ images }) => ({
          images: [...images, ...res.data.hits],
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.images !== this.props.images &&
      this.state.images.totalHits === 0
    ) {
      toast('No images');
    }
  }

  loadMore = () => {
    this.setState(
      ({ page }) => ({
        page: page + 1,
      }),
      this.getImages
    );
  };

  handleChangeName = imageName => {
    this.setState({ imageName, page: 1, images: [] }, this.getImages);
  };

  render() {
    const { loading, images, perPage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleChangeName} />

        <ImageGallery images={images} />

        {images.length === 0 && !loading && (
          <h2 style={{ textAlign: 'center' }}>No images for showing</h2>
        )}

        {loading && <Loader />}

        {images.length >= perPage &&
          images.length % perPage === 0 &&
          !loading && <Button onClick={this.loadMore} />}

        <ToastContainer />
      </>
    );
  }
}

export default App;
//
