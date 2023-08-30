import { PreImage } from '@/components/common/PreImage';
import { Button } from '@/components/common/ui/button';
import { useAppSelector } from '@/hooks/useRedux';
import { numberWithCommas } from '@/utils/functions/convertMoney';
import { message, Tag } from 'antd';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from 'src/shared/stores/productSlice';
import { IDetailProduct } from 'src/shared/types/product.type';

interface Props {
  detailProductData: IDetailProduct
}
const ProductsDetail = ({detailProductData}: Props) => {
  if (!detailProductData) return <></>;

  const {push, query} = useRouter();
  const id: number = Number(query.id)
  //Fake
  const { products } = useAppSelector(state => state.productSlice);
  const dispatch = useDispatch();

  const handleAddToCart = (value: any) => {
    const existingProduct = products.find((product) => product.productId === value.productId);
  
    if (!existingProduct) {
      const bodyAddProduct = {
        ...value,
        amount: 1
      };
      dispatch(addProduct(bodyAddProduct));
      message.success('Thêm vào giỏ hàng thành công');
    } else {
      const updatedProduct = {
        ...existingProduct,
        amount: Number(existingProduct.amount) + 1
      };
      dispatch(updateProduct(updatedProduct));
      message.success('Sản phẩm đã tồn tại trong giỏ hàng. Số lượng đã được cập nhật.');
    }
  };
  
  
  return (
    <>
      {detailProductData && id && (
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 dark:bg-[#1B1D35] bg-slate-100 p-4 md:p-12'>
          <div className='relative w-full flex justify-between items-center mx-auto'>
            <div
              className='relative w-full flex-shrink-0 snap-start rounded-lg p-8'
              style={{
                background: 'linear-gradient(90deg, #dd5e89, #f7bb97)',
              }}
            >
              <PreImage
                src={detailProductData.image}
                height={300}
                width={1980}
                layer={false}
                alt={'Banner News'}
                className='w-full rounded-lg object-cover'
              />
            </div>
          </div>
          <div className=' w-full flex flex-col justify-start items-start gap-3'>
            <div className='w-full flex flex-col justify-start items-start gap-5'>
              <h3 className='text-3xl'>{detailProductData.name}</h3>
              <div className='flex justify-start items-start gap-2'>
                {detailProductData.promotion > 0 && <Tag color='magenta'>Giảm {detailProductData.promotion}%</Tag>}
                <Tag color='volcano'>{detailProductData.manufacturer}</Tag>
              </div>
              <p className='text-2xl'>Giá chính thức: {numberWithCommas(detailProductData.price - ((detailProductData.price / 100) * detailProductData.promotion))}</p>
              <p className='text-lg text-slate-300 line-through'>Giá niêm yết: {numberWithCommas(detailProductData.price)}</p>
            </div>
            <div className='mt-10 w-full flex justify-start items-center gap-5'>
              <Button className='w-full' onClick={() => {
                handleAddToCart(detailProductData)
                push("/cart")
              }}>Mua ngay</Button>
              <div className='flex justify-center items-center gap-2 border-2 border-slate-400 p-2 rounded-lg cursor-pointer'>
                <ShoppingCart size={32} />
                <p onClick={() => handleAddToCart(detailProductData)}>Thêm vào giỏ hàng</p>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-start gap-5'>
            <h1 className='text-xl border-b-2 border-b-slate-400'>Thông tin cơ bản sản phẩm</h1>
            <p>- Cỡ màn hình hiển thị: {detailProductData.displaySize}</p>
            <p>- Loại màn hình: {detailProductData.displayType}</p>
            <p>- Kiểu camera trước: {detailProductData.frontCam}</p>
            <p>- Kiểu camera sau: {detailProductData.backCam}</p>
            <p>- Bộ nhớ RAM: {detailProductData.ram}</p>
            <p>- Bộ nhớ ROM: {detailProductData.rom}</p>
            <p>- Dung lượng pin: {detailProductData.battery}</p>
            <p>- Hệ diều hành: {detailProductData.operatingSystem}</p>
          </div>
        </div>
      )}
    </>
  );
};

export async function getStaticProps({ params }: any) {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API}/products/${id}`)
  const detailProductData = await res.json();
  return {
    props: {
      detailProductData,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false
  };
}

export default ProductsDetail;
