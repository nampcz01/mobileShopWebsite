import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Products from '@/components/home/products';
import React from 'react';
import { IProduct } from 'src/shared/types/product.type';

const ScrollRevealWrapper = dynamic(() => import('src/shared/components/common/ScrollRevealWrapper'), { ssr: false });

interface Props {
  productData: IProduct[]
}
export function ProductsPage({productData}: Props) {
  return (
    <React.Fragment>
      <ScrollRevealWrapper>
        <Products isPage={true} products={productData} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}
export async function getServerSideProps() {
  try {
    const productResponse = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_API}/products`);
    const productData = productResponse.data;

    return {
      props: {
        productData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        productData: [],
      },
    };
  }
}
ProductsPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ProductsPage;
