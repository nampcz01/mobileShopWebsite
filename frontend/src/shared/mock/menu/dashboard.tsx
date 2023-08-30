import {
  BookOutlined,
  UserOutlined,
  FileImageOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
export const menuEmployee: MenuItem[] | any = [
  getItem('Tài khoản', '/employee/account', <UserOutlined />),
  getItem('Sản phẩm', '/employee/product', <UserOutlined />),
  getItem('Kho hàng', '/employee/warehouse', <BookOutlined />),
  getItem('Giao dịch', '/employee/transaction', <FileImageOutlined />),
];
