import { Button, Tag } from "antd";
import { IProductAdd } from "../../types/product.type";
import { useState,useEffect } from "react";
import { getProductById } from "../../service/product.service";
import { useLocation } from "react-router-dom";


const ProductDetail = () =>{
    const location = useLocation();
    const pathname = location.pathname;
    const productId = pathname.split("/")[2];
    const [productDetail, setProductDetail] = useState<any>();
  
    useEffect(()=>{
        fetchDataProductD()
      },[]) 
      
    const fetchDataProductD = async()=>{
       try {
        const res = await getProductById({productId: Number(productId)});
        setProductDetail(res.data);

       } catch (e) {
        console.log(e)
       }
    }
    
    // if (!productDetail) return <></>

    // const handleAddToCart = (value: any) => {
    //     const existingProduct = products.find((product) => product.productId === value.productId);
      
    //     if (!existingProduct) {
    //       const bodyAddProduct = {
    //         ...value,
    //         amount: 1
    //       };
    //       dispatch(addProduct(bodyAddProduct));
    //       message.success('Thêm vào giỏ hàng thành công');
    //     } else {
    //       const updatedProduct = {
    //         ...existingProduct,
    //         amount: Number(existingProduct.amount) + 1
    //       };
    //       dispatch(updateProduct(updatedProduct));
    //       message.success('Sản phẩm đã tồn tại trong giỏ hàng. Số lượng đã được cập nhật.');
    //     }
    //   };
    return (
        <>
        {productDetail && (
          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-slate-100 p-4 md:p-12'>
            <div className='relative w-full flex justify-between items-center mx-auto'>
              <div
                className='relative w-full flex-shrink-0 snap-start rounded-lg p-8'
                style={{
                  background: 'linear-gradient(90deg, #dd5e89, #f7bb97)',
                }}
              >
            <img src={productDetail.image} height={150} width={1980} className='w-full rounded-lg object-cover'/>

              </div>
            </div>
            <div className=' w-full flex flex-col justify-start items-start gap-3'>
              <div className='w-full flex flex-col justify-start items-start gap-5'>
                <h3 className='text-3xl'>{productDetail.name}</h3>
                <div className='flex justify-start items-start gap-2'>
                  {productDetail.promotion > 0 && <Tag color='magenta'>Giảm {productDetail.promotion}%</Tag>}
                  <Tag color='volcano'>{productDetail.manufacturer}</Tag>
                </div>
                <p className='text-2xl'>Giá chính thức: {(productDetail.price - ((productDetail.price / 100) * productDetail.promotion)).toLocaleString()}</p>
                <p className='text-lg text-slate-500 line-through'>Giá niêm yết: {(productDetail.price).toLocaleString()}</p>
              </div>
              <div className='mt-10 w-full flex justify-start items-center gap-5'>
                <Button className='w-full'>Mua ngay</Button>
                <div className='flex justify-center items-center gap-2 border-2 border-slate-400 p-2 rounded-lg cursor-pointer'>
                  {/* <ShoppingCart size={32} /> */}
                  <p>Thêm vào giỏ hàng</p>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-5'>
              <h1 className='text-xl border-b-2 border-b-slate-400'>Thông tin cơ bản sản phẩm</h1>
              <p>- Cỡ màn hình hiển thị: {productDetail.displaySize}</p>
              <p>- Loại màn hình: {productDetail.displayType}</p>
              <p>- Kiểu camera trước: {productDetail.frontCam}</p>
              <p>- Kiểu camera sau: {productDetail.backCam}</p>
              <p>- Bộ nhớ RAM: {productDetail.ram}</p>
              <p>- Bộ nhớ ROM: {productDetail.rom}</p>
              <p>- Dung lượng pin: {productDetail.battery}</p>
              <p>- Hệ diều hành: {productDetail.operatingSystem}</p>
            </div>
          </div>
        )}
      </>
    )
}

export default ProductDetail;