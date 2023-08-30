import Dashboard from '@/components/layout/dashboard/DashboardLayout';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Col, message, Popconfirm, Row, Space, Table } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { ColumnType } from 'antd/lib/table';
import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IProduct } from 'src/shared/types/product.type';
import FormProduct from './form';
import { productService } from 'src/shared/services/product.service';
import { numberWithCommas } from '@/utils/functions/convertMoney';
import { PreImage } from '@/components/common/PreImage';

type Props = {};

const ProductManagement = ({}: Props) => {
  const [open, setOpen] = useState(false);
  const [action, setAtion] = useState<string>('');
  const [rowId, setRowId] = useState<number>();

  const { data: dataProduct, refetch } = useQuery(['listProduct'], () => productService.getAllProduct());
  const deleteMutation = useMutation({
    mutationKey: ['deleteProductMutation'],
    mutationFn: (productId: number) => productService.deleteProduct(productId),
    onSuccess: () => {
      message.success('Xoá thành công');
      refetch();
    },
    onError() {
      message.error('Xoá không thành công');
    },
  });

  const columns: ColumnType<IProduct>[] = [
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
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      render: (_, record) => (
        <div className='w-[300px] rounded-lg'>
          <PreImage
            width={200}
            height={200}
            alt={`Image ${record.name}`}
            src={record.image}
            className='w-full object-cover rounded-lg'
          />
        </div>
      ),
    },
    {
      title: 'Tên nhà sản xuất',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
    {
      title: 'Giá niêm yết',
      key: 'price',
      render: (_, record) => <p>{numberWithCommas(record.price)}</p>,
    },
    {
      title: 'Ưu đãi',
      key: 'promotion',
      render: (_, record) => <p>{record.promotion}%</p>,
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
              setRowId(record.productId);
            }}
          >
            <EditOutlined />
          </div>
          <Popconfirm
            okButtonProps={{ loading: deleteMutation.isLoading }}
            onConfirm={() => {
              deleteMutation.mutate(record.productId);
            }}
            title={'Xoá'}
          >
            <DeleteOutlined className='cursor-pointer'></DeleteOutlined>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      {dataProduct && (
        <>
          <Row className='mb-12' justify={'space-between'} align='middle' gutter={16}>
            <Col span={12}>
              <h1 className='font-bold text-2xl  text-black'>Quản lý sự kiện</h1>
            </Col>
            <Col span={12}>
              <div className='flex py-2 justify-end items-end gap-3'>
                <Button
                  onClick={() => {
                    refetch()
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
          <Table dataSource={dataProduct} columns={columns} scroll={{ x: true }} />
          {action === 'create' && !rowId ? (
            <FormProduct refetch={refetch} open={open} setOpen={setOpen} />
          ) : (
            <FormProduct refetch={refetch} editId={rowId} open={open} setOpen={setOpen} />
          )}
        </>
      )}
    </>
  );
};
ProductManagement.getLayout = (children: React.ReactNode) => <Dashboard>{children}</Dashboard>;
export default ProductManagement;
