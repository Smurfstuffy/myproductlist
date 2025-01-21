import {FC, ReactNode} from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({isOpen, onClose, title, children}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-[500px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>
        {title && (
          <h2 className="text-2xl mb-4 text-center font-bold">{title}</h2>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
