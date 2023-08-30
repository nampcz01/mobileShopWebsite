import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import dynamic from 'next/dynamic';
import Banner from '@/components/home/banner';
import AboutUs from '@/components/home/aboutUs';
import axios from 'axios';
import { bannerData } from '@/mocks/banner';
import Products from '@/components/home/products';
import { IProduct } from 'src/shared/types/product.type';

const ScrollRevealWrapper = dynamic(() => import('src/shared/components/common/ScrollRevealWrapper'), { ssr: false });

interface Props {
  productData: IProduct[]
}
export function Home({productData}: Props) {
  return (
    <>
      <ScrollRevealWrapper>
        <Banner bannerData={bannerData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <Products isPage={false} products={productData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <AboutUs />
      </ScrollRevealWrapper>
    </>
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
Home.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Home;
