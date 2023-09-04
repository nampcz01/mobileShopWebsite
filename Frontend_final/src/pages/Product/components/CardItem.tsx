/* eslint-disable @typescript-eslint/no-explicit-any */
//import { CARD_TYPE } from "../../constants";

import { Link } from "react-router-dom";
import { IProductCard } from "../../../types/product.type";

interface Props{
    data: IProductCard;
}

const CardItem = ({data} : Props)=>{

    return(
      <div className=' bg-slate-100 grid grid-cols-1 gap-3 cursor-pointer rounded-lg shadow-lg' >
        <Link to={`/products/${data.productId}`}>
          <div className='w-full'>
            <img src={data.image} height={150} width={1980} className='w-full rounded-lg object-cover'/>
  
  
          </div>
          <div className='flex flex-col justify-between items-start gap-3 p-5'>
            <h2 className='text-xl'>{data.name}</h2>
            <p className='text-sm'>Giá sản phẩm: {(data.price).toLocaleString()}</p>
            <p className='text-sm'>Giá khuyến mãi: {(data.price - (data.price * (data.promotion/100))).toLocaleString()}</p>      
          </div>
        </Link>
    </div>
    )
}

export default CardItem;