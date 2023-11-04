import { useState, useCallback } from 'react';

export const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  return { modalOpen, openModal, closeModal };
};
