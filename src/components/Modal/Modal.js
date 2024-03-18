import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const styles = {
  overlay: {
    backgroundColor: 'grey',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 20,
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onClose, item }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={styles}
      contentLabel="item modal"
    >
      {item}
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
