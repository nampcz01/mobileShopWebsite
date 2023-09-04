import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchBar = ({ fetchDataForSearching }: { fetchDataForSearching: (params: any) => void }) => {
  const abortController = useRef<any>(null);
  const onSearching = async(e:any) => {
    abortController.current && abortController.current.abort();
    await fetchDataForSearching({productName: e.target.value, abortController: abortController.current.signal})
  }
  return (

     <div className="pt-10 w-[80%] px-4 md:px-12 lg:px-32">
        <Input
          addonBefore={<SearchOutlined />}
          placeholder="Tìm kiếm sản phẩm"
          className='dark:bg-[#d7d7db] bg-blue-200 rounded-lg' 
          onChange={(e) => onSearching(e)}
        />
     </div>

  );
};

export default SearchBar;
