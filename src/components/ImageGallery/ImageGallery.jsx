import style from './imageGallery.module.css';
import PropTypes from 'prop-types';
import GalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ searchResults, onClick }) => {
  return (
    <ul className={style.gallery}>
      <GalleryItem searchResults={searchResults} onClick={onClick} />
    </ul>
  );
};

ImageGallery.propTypes = {
  searchResults: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
