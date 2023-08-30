import { useMutation } from '@tanstack/react-query';
import { Input } from 'antd';
import { SearchIcon } from 'lucide-react';
import { productService } from 'src/shared/services/product.service';

const { Search } = Input;
interface Props{
  setSearchProductData: any
}
const SearchProducts = ({setSearchProductData} : Props) => {
  const searchMutation = useMutation({
    mutationFn: (key: any) => productService.searchProduct(key),
    onSuccess(data, _variables, _context) {
      if (!data) return;
      setSearchProductData(data)
    },
    onError(error, variables, context) {
    },
  });
  const onSearch = (value: string) => {
    searchMutation.mutate(value)
  }

  return (
    <div className='pt-10 w-full px-4 md:px-12 lg:px-32'>
      <Search size="large" className='dark:bg-[#1B1D35] bg-blue-200 rounded-lg' placeholder='Tìm kiếm sản phẩm' onSearch={onSearch} enterButton={<SearchIcon />} />
    </div>
  );
};

export default SearchProducts;
