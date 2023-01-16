import style from './imageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ galleryItem: GalleryItem, searchResults, onClick }) => {
  return (
    <ul className={style.gallery}>
      <GalleryItem searchResults={searchResults} onClick={onClick} />
    </ul>
  );
};

ImageGallery.propTypes = {
  galleryItem: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
