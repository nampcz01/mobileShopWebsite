import Dashboard from '@/components/layout/dashboard/DashboardLayout';
import { ReloadOutlined } from '@ant-design/icons';
import { Button, Col, Row,  Space,  Table, Tag } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import FormAccount from './form';
import { accountService } from 'src/shared/services/account.service';
import { IAccount } from 'src/shared/types/account.type';
import { numberWithCommas } from '@/utils/functions/convertMoney';

type Props = {};

const AccountManagement = ({}: Props) => {
  const [open, setOpen] = useState(false);
  const [action, setAtion] = useState<string>('');
  const [rowId, setRowId] = useState<number>();

  const { data: dataAccount, refetch } = useQuery(['listAccount'], () => accountService.getAllAccount());
  const columns: ColumnType<IAccount>[] = [
    {
      title: 'ID người dùng',
      key: 'id',
      render: (_, record, index) => (
        <div>
          <p>{record.userId}</p>
        </div>
      ),
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Số dư',
      dataIndex: 'balance',
      render: (_, record) => (
        <Tag>{numberWithCommas(record.balance)}</Tag>
      ),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <div
            className='cursor-pointer'
            onClick={() => {
              setAtion('edit');
              setOpen(true);
              setRowId(record.id =record.userId);
            }}
          >
            <Button>Nạp tiền</Button>
          </div>
        </Space>
      ),
    },
  ];

  return (
    <>
      {dataAccount && (
        <>
          <Row className='mb-12' justify={'space-between'} align='middle' gutter={16}>
            <Col span={12}>
              <h1 className='font-bold text-2xl text-black'>Quản lý tài khoản</h1>
            </Col>
            <Col span={12}>
              <div className='flex py-2 justify-end items-end gap-3'>
                <Button
                  onClick={() => {
                    refetch();
                  }}
                  icon={<ReloadOutlined className='text-xs' />}
                >
                  Làm mới
                </Button>
                <Button
                  onClick={() => {
                    setAtion('create');
                    setRowId(NaN);
                    setOpen(true);
                  }}
                >
                  Tạo mới
                </Button>
              </div>
            </Col>
          </Row>
          <Table dataSource={dataAccount} columns={columns} scroll={{ x: true }} />
          {action === 'create' && !rowId ? (
            <FormAccount refetch={refetch} open={open} setOpen={setOpen} />
          ) : (
            <FormAccount refetch={refetch} editId={rowId} open={open} setOpen={setOpen} />
          )}
        </>
      )}
    </>
  );
};
AccountManagement.getLayout = (children: React.ReactNode) => <Dashboard>{children}</Dashboard>;
export default AccountManagement;
