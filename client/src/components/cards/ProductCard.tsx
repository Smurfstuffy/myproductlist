import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {ProductCardProps} from '../../types/card';
import {useAppDispatch} from '../../hooks/useRedux';
import {deleteProduct} from '../../store/slices/deleteProduct';

const ProductCard: FC<ProductCardProps> = ({id, imageUrl, name}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  const handleRemove = (id: string) => {
    dispatch(deleteProduct(id));
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={handleClick}
      className="relative cursor-pointer p-4 bg-white border border-gray-400 rounded-lg shadow hover:shadow-xl transition-shadow flex flex-col items-center"
    >
      <button
        onClick={e => {
          e.stopPropagation();
          handleRemove(id);
        }}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 text-xl"
      >
        ✕
      </button>
      <img
        src={imageUrl}
        alt={name}
        className="w-32 h-32 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-bold text-center text-black">{name}</h3>
    </div>
  );
};

export default ProductCard;
