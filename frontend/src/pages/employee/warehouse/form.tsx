import { useAppSelector } from '@/hooks/useRedux';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Form, message, Modal, Row, Col, Input, Select } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useEffect, useState } from 'react';
import { productService } from 'src/shared/services/product.service';
import { warehouseService } from 'src/shared/services/warehouse.service';
import { IWareHouseAdd } from 'src/shared/types/warehouse.type';

interface Props {
  editId?: number;
  open: any;
  setOpen: any;
  refetch: any;
}
const FormWarehouse = ({ editId, open, setOpen, refetch }: Props) => {
  const [form] = useForm();
  const { user } = useAppSelector(state => state.appSlice);
  const [productId, setProductId] = useState<number>();
  const isEditIdValidNumber = typeof editId === 'number';
  const { data: listProduct } = useQuery(
    ["product"],
    () => productService.getAllProduct(),
    {
      select(data) {
        const res = data;
        const result = res.map((item) => {
          return {
            value: item.productId,
            label: item.name,
          };
        });
        return result;
      },
    }
  );
  const handleChange = (value: any) => {
    setProductId(value);
  };
  const createMutation = useMutation({
    mutationFn: (body: IWareHouseAdd) => warehouseService.createWarehouse(body),
    onSuccess(data, _variables, _context) {
      if (!data) return;
      message.success('Tạo thành công');
      setOpen(false);
      refetch();
    },
    onError(error, variables, context) {
      message.error('Tạo không thành công');
    },
  });
  function handleCreate(value: any) {
    if (editId) {
    } else {
      const formCreate = {
        productId: productId,
        ...value,
      };
      createMutation.mutate(formCreate);
    }
  }
  const { data } = useQuery(['Warehouse'], () => warehouseService.getWarehouseById(editId as number), {
    enabled: isEditIdValidNumber,
  });
  useEffect(() => {
    if (editId && data) {
      form.setFieldsValue(data);
    }
  }, [data]);
  return (
    <Modal title={editId ? `Chỉnh sửa kho` : 'Tạo kho mới'} centered open={open} width={1000} footer={false}>
      <Form
        form={form}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={handleCreate}
        autoComplete='off'
        layout='vertical'
      >
        <Form.Item label="Sản phẩm" name="productId">
          <Select options={listProduct} onChange={handleChange} />
        </Form.Item>

        <Form.Item label='Số lượng' name='amount' rules={[{ required: true, message: 'Vui lòng nhập số lượng' }]}>
          <Input type='number' />
        </Form.Item>

        <Row justify={'center'} align={'middle'} gutter={16}>
          <Col>
            <Form.Item style={{ textAlign: 'center' }}>
              <Button onClick={() => setOpen(false)} htmlType='button'>
                Huỷ bỏ
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item style={{ textAlign: 'center' }}>
              <Button htmlType='submit'>{editId ? 'Chỉnh sửa' : 'Tạo mới'}</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default FormWarehouse;
