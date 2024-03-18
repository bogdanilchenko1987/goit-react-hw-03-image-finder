// import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

// export const ImageGalleryItem = ({ src, tags }) => {
//   return (
//     <GalleryItem>
//       <GalleryImg src={src} alt={tags} />
//     </GalleryItem>
//   );
// };

import { Component } from 'react';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';
import { TopicModal } from '../Modal/Modal';

export class ImggalItm extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { src, tags, url } = this.props;

    return (
      <>
        <GalleryItem>
          <GalleryImg src={src} alt={tags} onClick={this.openModal} />

          <TopicModal
            isOpen={isModalOpen}
            onClose={this.closeModal}
            item={url}
          />
        </GalleryItem>
      </>
    );
  }
}
