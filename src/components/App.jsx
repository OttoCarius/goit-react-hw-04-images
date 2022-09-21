import React from 'react';
import pixFetch from '../services/PixabayApi';
import { Circles } from 'react-loader-spinner';

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Message from './Message/Message.jsx';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';

import { useState, useEffect } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [clickedImg, setClickedImg] = useState({});
  const [page, setPage] = useState(1);

  const resetPage = () => setPhotos([]);

  const onSubmit = searchValue => {
    resetPage();
    setSearchQuery(searchValue);
    setPage(1);
  };

  useEffect(() => {
    if (searchQuery.trim()) {
      setStatus('pending');
      pixFetch(searchQuery, page)
        .then(data => onHandleData(data.hits))
        .catch(error => console.log(error))
        .finally(() => setStatus(''));
    }
    // eslint-disable-next-line
  }, [searchQuery, page]);

  const onLoadMore = () => {
    setPage(prevState => (prevState += 1));
  };

  function onHandleData(data) {
    setPhotos([...photos, ...data]);
  }

  const onHandleClick = click => {
    const foundImage = photos.find(photo => photo.tags === click);
    setClickedImg(foundImage);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const spinnerStyle = { justifyContent: 'center' };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {photos.length < 1 && <Message />}
      <ImageGallery>
        <ImageGalleryItem photos={photos} onHandleClick={onHandleClick} />
      </ImageGallery>
      {status === 'pending' && (
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
      {photos.length ? <Button onLoadMore={onLoadMore} /> : ''}
      {showModal && (
        <Modal photo={clickedImg} onCloseModal={onCloseModal}></Modal>
      )}
    </div>
  );
}

export default App;
