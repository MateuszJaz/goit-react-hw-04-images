import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImagesWithQuery from 'services/api';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [totalHits, setTotalHits] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    url: '',
  });

  useEffect(() => {
    if (page === 0) {
      return;
    }
    setError(false);
    try {
      fetchImagesWithQuery(searchQuery, page).then(response => {
        setSearchResults(searchResults => [
          ...searchResults,
          ...response.data.hits,
        ]);
        setTotalHits(response.data.totalHits);
        setIsLoading(false);
      });
    } catch (error) {
      setError(true);
    }
  }, [searchQuery, page]);

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.search.value === '') {
      return alert('Type something...');
    } else {
      setIsLoading(true);
      setSearchResults([]);
      setSearchQuery(e.target.search.value.trim().toLowerCase());
      setPage(1);
      e.target.reset();
    }
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setPage(page + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {totalHits !== 0 ? (
        <>
          <ImageGallery searchResults={searchResults} onClick={setModal} />
          {isLoading && <Loader />}
        </>
      ) : (
        (error && <p className="info">Oops... something went wrong :(</p>) || (
          <p className="info">Oops... Nothing found :(</p>
        )
      )}
      {searchResults.length >= 12 && searchResults.length !== totalHits ? (
        <Button onClick={handleLoadMore} />
      ) : (
        totalHits && !isLoading && <p className="info">End of results</p>
      )}
      {modal.show && (
        <Modal
          closeModal={() => {
            setModal({ show: false, url: '' });
          }}
          largeImageURL={modal.url}
        />
      )}
    </>
  );
};
