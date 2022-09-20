import React, { Component } from 'react';
import pixFetch from '../services/PixabayApi';
import { Circles } from 'react-loader-spinner';

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Message from './Message/Message.jsx';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    photos: [],
    searchQuery: '',
    status: 'idle',
    showModal: false,
    clickedImg: {},
    page: 1,
  };

  resetPage = () => {
    this.setState({
      photos: [],
      page: 1,
    });
  };

  getValue = searchValue => {
    this.resetPage();
    this.setState({ searchQuery: searchValue });
    pixFetch(searchValue)
      .then(data => this.onHandleData(data.hits))
      .catch(error => console.log(error));
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      status: 'pending',
      page: (prevState.page += 1),
    }));
    pixFetch(this.state.searchQuery, this.state.page + 1)
      .then(data => this.onHandleData(data.hits))
      .catch(error => console.log(error));
  };

  onHandleData = data => {
    this.setState(prevState =>
      prevState.searchQuery !== this.state.searchQuery
        ? { photos: data, status: 'loaded' }
        : { photos: [...this.state.photos, ...data], status: 'loaded' }
    );
  };

  onHandleClick = click => {
    const foundImage = this.state.photos.find(photo => photo.tags === click);
    this.setState({ clickedImg: foundImage, showModal: true });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const spinnerStyle = { justifyContent: 'center' };

    return (
      <div>
        <SearchBar onSubmit={this.getValue} />
        {this.state.photos.length < 1 && <Message />}
        <ImageGallery>
          <ImageGalleryItem
            photos={this.state.photos}
            onHandleClick={this.onHandleClick}
          />
        </ImageGallery>
        {this.state.status === 'pending' && (
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={spinnerStyle}
            wrapperClass=""
            visible={true}
          />
        )}
        {this.state.status === 'loaded' && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        {this.state.showModal && (
          <Modal
            photo={this.state.clickedImg}
            onCloseModal={this.onCloseModal}
          ></Modal>
        )}
      </div>
    );
  }
}

export default App;
