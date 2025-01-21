import {FC} from 'react';
import {useAppDispatch} from '../../hooks/useRedux';
import {addProduct} from '../../store/slices/addProduct';
import {SubmitHandler, useForm} from 'react-hook-form';

interface FormFields {
  imageUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
}

const ProductForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<FormFields>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormFields> = async data => {
    await dispatch(addProduct(data));
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('imageUrl', {required: 'Image URL is required'})}
        type="text"
        placeholder="Enter Image URL"
        className="text-3xl mb-2 border p-2 rounded"
      />
      {errors.imageUrl && (
        <span className="text-red-500 text-xl mb-4">
          {errors.imageUrl.message}
        </span>
      )}

      <input
        {...register('name', {required: 'Name is required'})}
        type="text"
        placeholder="Enter Product Name"
        className="text-3xl mb-2 border p-2 rounded"
      />
      {errors.name && (
        <span className="text-red-500 text-xl mb-4">{errors.name.message}</span>
      )}

      <input
        {...register('count', {
          required: 'Count is required',
          valueAsNumber: true,
        })}
        type="number"
        placeholder="Enter Product Count"
        className="text-3xl mb-2 border p-2 rounded"
      />
      {errors.count && (
        <span className="text-red-500 text-xl mb-4">
          {errors.count.message}
        </span>
      )}

      <input
        {...register('size.width', {
          required: 'Width is required',
          valueAsNumber: true,
        })}
        type="number"
        placeholder="Enter Width"
        className="text-3xl mb-2 border p-2 rounded"
      />
      {errors.size?.width && (
        <span className="text-red-500 text-xl mb-4">
          {errors.size.width.message}
        </span>
      )}

      <input
        {...register('size.height', {
          required: 'Height is required',
          valueAsNumber: true,
        })}
        type="number"
        placeholder="Enter Height"
        className="text-3xl mb-2 border p-2 rounded"
      />
      {errors.size?.height && (
        <span className="text-red-500 text-xl mb-4">
          {errors.size.height.message}
        </span>
      )}

      <input
        {...register('weight', {required: 'Weight is required'})}
        type="text"
        placeholder="Enter Product Weight"
        className="text-3xl mb-2 border p-2 rounded"
      />
      {errors.weight && (
        <span className="text-red-500 text-xl mb-4">
          {errors.weight.message}
        </span>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="text-3xl bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isSubmitting ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default ProductForm;
