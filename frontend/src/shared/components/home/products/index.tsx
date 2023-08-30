import TitleSection from '@/components/common/TitleSection';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Tag } from 'antd';
import React from 'react';
import { useState } from 'react';
import { manufacturerService } from 'src/shared/services/manufacturer.service';
import { IProduct } from 'src/shared/types/product.type';
import ProductItem from './ProductItem';
import SearchProducts from './SearchProducts';

interface Props {
  isPage: boolean;
  products: IProduct[];
}
const Products = ({ isPage, products }: Props) => {
  if (products.length < 0) return <></>;
  const [searchProductData, setSearchProductData] = useState<IProduct[]>(products);
  const titleProduct = isPage ? 'Danh sách các sản phẩm' : 'Danh sách các sản phẩm nổi bật';
  const { data } = useQuery(['Manufacturer'], () => manufacturerService.getAllManufacturer(), {
    enabled: isPage,
  });
  const searchMutation = useMutation({
    mutationFn: (key: any) => manufacturerService.searchManufacturer(key),
    onSuccess(data, _variables, _context) {
      if (!data) return;
      setSearchProductData(data)
    },
    onError(error, variables, context) {},
  });
  const handleSearchManufacturer = (key: any) => {
    searchMutation.mutate(key);
  };
  return (
    <section id='News' className={`${isPage ? '' : 'mt-28'} px-4 md:px-32 py-8`}>
      <SearchProducts setSearchProductData={setSearchProductData} />
      <div className='w-full my-10'>
        <TitleSection title='Sản phẩm' description={titleProduct} findMore={false} />
        {!isPage ? (
          <div className='mt-10 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {products.slice(0, 8).map((item, idx) => (
              <ProductItem key={idx} data={item} />
            ))}
          </div>
        ) : (
          <React.Fragment>
            <h3 className='mt-5'>Nhà sản xuất</h3>
            <div className='flex justify-start items-start gap-2'>
              {data &&
                data.map((item, idx) => (
                  <Tag
                    key={idx}
                    color='magenta'
                    className='cursor-pointer opacity-70 hover:opacity-100'
                    onClick={() => handleSearchManufacturer(item)}
                  >
                    {item}
                  </Tag>
                ))}
            </div>
            <div className='mt-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-5'>
              {searchProductData.map((item, idx) => (
                <ProductItem key={idx} data={item} />
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default Products;
