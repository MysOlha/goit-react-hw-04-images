import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';
import { fetchImages } from 'services/api';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    fetchImages(query, page)
      .then(({ hits }) => {
        setImages(prevImg => [...prevImg, ...hits]);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [page, query]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleChangeName = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  return (
    <>
      <Searchbar onSubmit={handleChangeName} />

      <ImageGallery images={images} />

      {images.length === 0 && !loading && (
        <h2 style={{ textAlign: 'center' }}>No images for showing</h2>
      )}

      {loading && <Loader />}

      {images.length >= 12 && images.length % 12 === 0 && !loading && (
        <Button onClick={loadMore} />
      )}

      <ToastContainer />
    </>
  );
};

export default App;
//
