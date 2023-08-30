import { PreImage } from '@/components/common/PreImage';
import { useAppSelector } from '@/hooks/useRedux';
import { numberWithCommas } from '@/utils/functions/convertMoney';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import { useEffect, useState } from 'react';
import { orderService } from 'src/shared/services/order.service';
import { IDetailProduct } from 'src/shared/types/product.type';
import { IOrderProduct } from 'src/shared/types/order.type';

const Payment = () => {
  const { products } = useAppSelector(state => state.productSlice);
  const totalPriceProduct = products.reduce((total, item) => {
    const discountedPrice = (item.price - (item.price / 100) * item.promotion) * Number(item.amount);
    return total + discountedPrice;
  }, 0);
  const [productFilter, setProduct] = useState<IDetailProduct[]>();
  useEffect(() => {
    setProduct(products.filter(item => item.choose === true));
  }, [products]);
  const createOrder = useMutation({
    mutationFn: (body: IOrderProduct | any) => orderService.createOrder(body),
    onSuccess(data, _variables, _context) {
      if (!data) return;
      message.success('Thanh toán thành công');
    },
    onError(error, variables, context) {
      message.error('Thanh toán không thành công');
    },
  });
  const handleCreateOrder = () => {
    const formOrder = {
      productOrders: productFilter
    }
    createOrder.mutate(formOrder)
  }
  return (
    <div className='w-full pt-10 px-4 md:px-12 lg:px-32 grid grid-cols-3 gap-10 justify-start items-start'>
      <div className='flex flex-col justify-start items-start gap-5 col-span-2'>
      {productFilter &&
        productFilter.map(product => (
          <div className='relative dark:bg-[#1B1D35] bg-slate-100 w-full max-h-[350px] flex justify-start items-start gap-5 p-4 rounded-lg'>
            <PreImage
              width={150}
              height={150}
              alt={product.name}
              src={product.image}
              className='object-center rounded-lg'
            />
            <div className='flex flex-col justify-start items-start'>
              <h3 className='text-xl cursor-pointer'>{product.name}</h3>
              <p>Thành tiền: {numberWithCommas((product.price - (product.price / 100) * product.promotion) * Number(product.amount))}</p>
              <p>Số lượng: {product.amount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col justify-start items-start gap-5'>
        <h1>Thông tin mua hàng</h1>
        <p>Người mua: </p>
        <p>Địa chỉ: </p>
        <p>Tổng tiền: {numberWithCommas(totalPriceProduct)}</p>
        <Button className='w-full' htmlType='submit' onClick={() => handleCreateOrder()}>Thanh toán</Button>
      </div>
    </div>
  );
};

export default Payment;
