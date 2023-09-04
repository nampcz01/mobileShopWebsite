import { numberWithCommas } from '@/utils/functions/convertMoney';
import { message, RadioChangeEvent } from 'antd';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Radio } from 'antd';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { removeProduct, updateProduct } from 'src/shared/stores/productSlice';
import { IDetailProduct } from 'src/shared/types/product.type';
//import { PreImage } from '../common/PreImage';
import { useState } from 'react';

interface Props {
  choose: Array<number>;
  setChoose: any;
  product: IDetailProduct;
}
const Cart = ({ product, choose, setChoose }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [chooseState, setChooseState] = useState<number[]>([]);

  const handleAddAmount = () => {
    const updatedProducts = {
      ...product,
      amount: Number(product.amount) + 1,
    };
    dispatch(updateProduct(updatedProducts));
    message.success('Đã thêm số lượng mua');
  };

  const handleMinusAmount = () => {
    if (product && Number(product.amount) > 1) {
      const updatedProducts = {
        ...product,
        amount: Number(product.amount) - 1,
      };
      dispatch(updateProduct(updatedProducts));
      message.success('Đã bỏ số lượng mua');
    } else {
      message.warning('Số lượng sản phẩm đã giảm đến mức tối thiểu');
    }
  };
  const handleChooseProduct = (productId: number) => {
    const updatedChoose = [...choose, productId];
    setChooseState(updatedChoose);
    setChoose(updatedChoose);
    const updatedProducts = {
      ...product,
      choose: !product.choose,
    };
    dispatch(updateProduct(updatedProducts));
  };
  const onChange = () => {
    handleChooseProduct(product.productId);
  };
  return (
    <div className='relative dark:bg-[#1B1D35] bg-slate-100 w-full flex justify-between items-start max-h-[350px] p-4 rounded-lg'>
      <div className='flex justify-start items-start gap-5'>
        <Radio
          value={product.productId}
          onClick={() => onChange()}
          className='absolute top-2 left-2 z-30'
          checked={product.choose}
        />
        {/* <PreImage
          width={150}
          height={150}
          alt={product.name}
          src={product.image}
          className='object-center rounded-lg'
        /> */}
          <img alt={product.name} src={product.image} height={150} width={1980} className='object-center rounded-lg'/>

        <div className='flex flex-col justify-start items-start'>
          <h3
            className='text-3xl cursor-pointer hover:underline'
            onClick={() => router.push(`/products/${product.productId}`)}
          >
            {product.name}
          </h3>
          <p className='text-lg text-red-400'>
            {numberWithCommas(product.price - (product.price / 100) * product.promotion)}
          </p>
          <p className='text-base dark:text-slate-300 line-through'>Giá niêm yết: {numberWithCommas(product.price)}</p>
        </div>
      </div>
      <div className='flex flex-col justify-end items-start gap-10'>
        <Trash2 className='cursor-pointer' onClick={() => dispatch(removeProduct(product.productId))} />
        <div className='flex justify-between items-center gap-5'>
          <Plus className='dark:bg-[#131528] bg-white rounded-lg cursor-pointer' onClick={() => handleAddAmount()} />
          <p>{product.amount}</p>
          <Minus className='dark:bg-[#131528] bg-white rounded-lg cursor-pointer' onClick={() => handleMinusAmount()} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
