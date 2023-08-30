import BtnCommon from '@/components/common/BtnCommon';
import { PreImage } from '@/components/common/PreImage';
import { numberWithCommas } from '@/utils/functions/convertMoney';
import { useRouter } from 'next/router';
import { IProduct } from 'src/shared/types/product.type';

interface Props {
  data: IProduct;
}
const ProductItem = ({ data }: Props) => {
  const router = useRouter()
  return (
    <div className='dark:bg-[#1B1D35] bg-slate-100 grid grid-cols-1 gap-3 cursor-pointer rounded-lg shadow-lg' onClick={() => router.push(`/products/${data.productId}`)}>
      <div className='w-full'>
        <PreImage
          src={data.image}
          height={150}
          width={1980}
          layer={false}
          alt={'News'}
          className='w-full rounded-lg object-cover'
        />
      </div>
      <div className='flex flex-col justify-between items-start gap-3 p-5'>
        <h2 className='text-xl'>{data.name}</h2>
        <p className='text-sm'>Giá lên đời: {numberWithCommas(data.price)}</p>
        <BtnCommon cls='bg-transparent p-0 m-0' title='Tìm hiểu thêm' />
      </div>
    </div>
  );
};

export default ProductItem;
