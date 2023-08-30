import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import dynamic from 'next/dynamic';
import Cart from '@/components/cart/Cart';
import { useAppSelector } from '@/hooks/useRedux';
import { Button } from 'antd';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { PreImage } from '@/components/common/PreImage';
import { numberWithCommas } from '@/utils/functions/convertMoney';

const ScrollRevealWrapper = dynamic(() => import('src/shared/components/common/ScrollRevealWrapper'), { ssr: false });

export function CartPage() {
  const { products } = useAppSelector(state => state.productSlice);
  const checkChooseProduct = products.find(item => item.choose === true);
  const totalAmountProduct = products.reduce((total, item) => total + Number(item.amount), 0);
  const totalPriceProduct = products.reduce((total, item) => {
    const discountedPrice = (item.price - (item.price / 100) * item.promotion) * Number(item.amount);
    return total + discountedPrice;
  }, 0);
  
  const router = useRouter();
  const [choose, setChoose] = useState<Array<number>>([]);
  return (
    <ScrollRevealWrapper>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='mt-10 text-xl border-b-2 border-b-slate-400'>Giỏ hàng của bạn</h1>
        <div className='mt-10 px-4 md:px-12 lg:px-48 w-full flex flex-col justify-center items-center gap-5'>
          {products && products?.length > 0 ? (
            products?.map((item, idx) => <Cart choose={choose} setChoose={setChoose} key={idx} product={item} />)
          ) : (
            <div className='my-5 px-4 md:px-12 lg:px-32 max-h-[550px] flex justify-center items-center rounded-full'>
              <PreImage
                src='/bg-item-not-found.jpg'
                alt='ItemNotFound'
                width={650}
                height={550}
                className='w-full object-fill md:object-cover rounded-lg'
              />
            </div>
          )}
        </div>
        {checkChooseProduct && (
          <div className='w-full px-4 md:px-12 lg:px-48 flex justify-between items-center'>
            <p>Tạm tính: {numberWithCommas(totalPriceProduct)} </p>
            <Button className='my-5 dark:text-white' onClick={() => router.push('/cart/payment')}>
              Mua ngay({totalAmountProduct})
            </Button>
          </div>
        )}
      </div>
    </ScrollRevealWrapper>
  );
}
CartPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CartPage;
