import { PreImage } from '@/components/common/PreImage';
import { footerData } from '@/mocks/footer';
import { LocateIcon } from 'lucide-react';

const Footer = () => {
  return (
    <section className='w-full flex flex-col gap-10 justify-start items-start mx-auto px-16 py-10 dark:bg-[#141523] font-thin border-t-2 light:border-slate-400'>
      <div className='w-full grid grid-cols-2 gap-4 justify-start items-start'>
        <div className='flex flex-col justify-start items-start'>
          <PreImage height={200} width={200} src={'/Logo2.png'} alt={'Logo'} layer={false} />
          <p>Địa chỉ: {footerData.contactData.address}</p>
          <p>Số điện thoại: {footerData.contactData.phone}</p>
          <p>Email: {footerData.contactData.email}</p>
        </div>
        <div className='flex flex-col justify-end items-end'>
         
        </div>
      </div>
      <div className='w-full flex justify-between items-center border-t-2 pt-5'>
        <div className='flex justify-between items-center gap-3'>
          <LocateIcon />
          <p>Thành viên nhóm: Trần Anh Vũ/ Bùi Quang Hoàng Nam</p>
        </div>
        <ul className='flex justify-between items-center gap-3'>
          <li>Demo web đề tài cửa hàng điện thoại di động sử dụng Microservice và React</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
