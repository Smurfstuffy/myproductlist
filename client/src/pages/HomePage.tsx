import {useState} from 'react';
import ProductForm from '../components/forms/ProductAddForm';
import Modal from '../components/Modal';
import ProductCardList from '../components/cards/ProcustCardList';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white text-xl py-2 px-4 rounded hover:bg-blue-600 mt-2"
      >
        Add Product
      </button>
      <ProductCardList />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Add Product"
      >
        <ProductForm />
      </Modal>
    </div>
  );
};

export default HomePage;
