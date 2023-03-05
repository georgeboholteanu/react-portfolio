import React, { useState } from 'react';
import { Modal } from 'react-modal';


const Thumbnail = ({ highResImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      {/* <button onClick={handleOpenModal}> */}
        <img src={highResImage} alt="Thumbnail" className="w-32 h-32 object-cover rounded-md" onClick={handleOpenModal}/>
      {/* </button> */}

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <div className="bg-white p-4 rounded-lg">
          <button onClick={handleCloseModal}>
            SAMPLE TEXT
          </button>
          <img src={highResImage} alt="High Res" className="w-full h-full object-cover" />
        </div>
      </Modal>
    </>
  );
};

export default Thumbnail;