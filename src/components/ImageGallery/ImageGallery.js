import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

import PropTypes from 'prop-types';

export const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryList>
      {items.map((item, idx) => (
        <ImageGalleryItem
          key={idx}
          src={item.webformatURL}
          tags={item.tags}
          url={<img src={item.largeImageURL} alt={item.tags} />}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};

// WORKING VERSION
// export const ImageGallery = ({ items }) => {
//   return (
//     <ImageGalleryList>
//       {items.map((item, idx) => (
//         <ImageGalleryItem key={idx} src={item.webformatURL} tags={item.tags} />
//       ))}
//     </ImageGalleryList>
//   );
// };

//  old version with id as key from api

// export const ImageGallery = ({ items }) => {
//   return (
//     <ImageGalleryList>
//       {items.map(item => (
//         <ImageGalleryItem
//           key={item.id}
//           src={item.webformatURL}
//           tags={item.tags}
//         />
//       ))}
//     </ImageGalleryList>
//   );
// };
