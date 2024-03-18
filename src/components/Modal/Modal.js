import React from 'react';
import Modal from 'react-modal';

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

export const TopicModal = ({ isOpen, onClose, item }) => {
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
