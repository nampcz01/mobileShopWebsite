import Dashboard from '@/components/layout/dashboard/DashboardLayout';
import { ReloadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Table, Tag } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import FormWarehouse from './form';
import { warehouseService } from 'src/shared/services/warehouse.service';
import { IWareHouse } from 'src/shared/types/warehouse.type';

type Props = {};

const WarehouseManagement = ({}: Props) => {
  const [open, setOpen] = useState(false);
  const [action, setAtion] = useState<string>('');
  const [rowId, setRowId] = useState<number>();

  const { data: dataWarehouse, refetch } = useQuery(['listWarehouse'], () => warehouseService.getAllWarehouse());
  const columns: ColumnType<IWareHouse>[] = [
    {
      title: 'ID sản phẩm',
      key: 'id',
      render: (_, record, index) => (
        <div>
          <p>{record.productId}</p>
        </div>
      ),
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (_, record) => (
        <Tag>{record.status}</Tag>
      ),
    },
  ];

  return (
    <>
      {dataWarehouse && (
        <>
          <Row className='mb-12' justify={'space-between'} align='middle' gutter={16}>
            <Col span={12}>
              <h1 className='font-bold text-2xl text-black'>Quản lý Kho</h1>
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
          <Table dataSource={dataWarehouse} columns={columns} scroll={{ x: true }} />
          {action === 'create' && !rowId ? (
            <FormWarehouse refetch={refetch} open={open} setOpen={setOpen} />
          ) : (
            <FormWarehouse refetch={refetch} editId={rowId} open={open} setOpen={setOpen} />
          )}
        </>
      )}
    </>
  );
};
WarehouseManagement.getLayout = (children: React.ReactNode) => <Dashboard>{children}</Dashboard>;
export default WarehouseManagement;
