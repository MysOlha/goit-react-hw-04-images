import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';

const APIURL = 'https://pixabay.com/api';
const KEY = '29767436-14c23983d91939ba59ac81ecb';
const PERPAGE = 12;

const App = () => {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getImages = () => {
    setLoading(true);
    axios
      .get(
        `${APIURL}/?key=${KEY}&q=${imageName}&page=${page}&image_type=photo&orientation=horizontal&per_page=${PERPAGE}`
      )
      .then(res =>
        setImages(({ images }) => ({
          images: [...images, ...res.data.hits],
        }))
      )
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (images !== setImages && images.totalHits === 0) {
      toast('No images');
    }

    // return () => {
    //   effect;
    // };
  }, [images]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleChangeName = imageName => {
    console.log(imageName);
    setImageName(imageName);
    setPage(1);
    setImages([]);
  };

  // const { loading, images, perPage } = this.state;
  return (
    <>
      <Searchbar onSubmit={handleChangeName} />

      <ImageGallery images={images} />

      {images.length === 0 && !loading && (
        <h2 style={{ textAlign: 'center' }}>No images for showing</h2>
      )}

      {loading && <Loader />}

      {images.length >= PERPAGE &&
        images.length % PERPAGE === 0 &&
        !loading && <Button onClick={loadMore} />}

      <ToastContainer />
    </>
  );
};

export default App;
//
