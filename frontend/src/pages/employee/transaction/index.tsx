import Dashboard from '@/components/layout/dashboard/DashboardLayout';
import { CheckOutlined, ReloadOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space, Table } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { transactionService } from 'src/shared/services/transaction.service';
import { ITransaction } from 'src/shared/types/transaction.type';
import { formattedDate } from '@/utils/functions/convertDay';
import { numberWithCommas } from '@/utils/functions/convertMoney';

type Props = {};

const TransactionManagement = ({}: Props) => {
  const { data: dataTransaction, refetch } = useQuery(['listTransaction'], () => transactionService.getAllTransaction());
  const columns: ColumnType<ITransaction>[] = [
    {
      title: '#',
      key: 'id',
      render: (_, record, index) => (
        <div>
          <p>{index}</p>
        </div>
      ),
    },
    {
      title: 'ID người chuyển',
      dataIndex: 'fromId',
      key: 'fromId',
    },
    {
      title: 'ID người nhận',
      dataIndex: 'toId',
      key: 'toId',
    },
    {
      title: 'Ngày giao dịch',
      key: 'dateTime',
      render: (_, record) => <p>{formattedDate(record.dateTime)}</p>,
    },
    {
      title: 'Số tiền',
      dataIndex: 'amount',
      render: (_, record) => <p>{numberWithCommas(record.amount)}</p>,
    },
  ];

  return (
    <>
      {dataTransaction && (
        <>
          <Row className='mb-12' justify={'space-between'} align='middle' gutter={16}>
            <Col span={12}>
              <h1 className='font-bold text-2xl text-black'>Quản lý giao dịch</h1>
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
              </div>
            </Col>
          </Row>
          <Table dataSource={dataTransaction} columns={columns} />
        </>
      )}
    </>
  );
};
TransactionManagement.getLayout = (children: React.ReactNode) => <Dashboard>{children}</Dashboard>;
export default TransactionManagement;
