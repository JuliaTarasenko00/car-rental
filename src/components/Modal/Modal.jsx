import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { ButtonClose, Modal, Overlay } from './Modal.styled';

const modalRoot = document.getElementById('modal');

export const ModalComponent = ({ children, onClose }) => {
  const onClickOverlay = ev => {
    if (ev.target === ev.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onClickOverlay}>
      <Modal>
        <ButtonClose type="button" onClick={onClose}>
          <AiOutlineClose />
        </ButtonClose>
        {children}
      </Modal>
    </Overlay>,
    modalRoot
  );
};

ModalComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
