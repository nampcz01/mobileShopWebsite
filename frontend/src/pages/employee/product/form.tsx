import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Form, Input, message, Modal, Row, Col } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useEffect } from 'react';
import { productService } from 'src/shared/services/product.service';
import { IProductAdd } from 'src/shared/types/product.type';

interface Props {
  editId?: number;
  open: any;
  setOpen: any;
  refetch: any;
}
const FormProduct = ({ editId, open, setOpen, refetch }: Props) => {
  const [form] = useForm();
  const isEditIdValidNumber = typeof editId === 'number';
  const createMutation = useMutation({
    mutationFn: (body: IProductAdd) => productService.createProduct(body),
    onSuccess(data, _variables, _context) {
      if (!data) return;
      message.success('Cập nhật thành công');
      setOpen(false);
      refetch();
    },
    onError(error, variables, context) {
      message.error('Cập nhật không thành công');
    },
  });
  const updateMutation = useMutation({
    mutationFn: (body: any) => productService.updateProduct(editId as number, body),
    onSuccess(data, _variables, _context) {
      if (!data) return;
      message.success('Cập nhật thành công');
      setOpen(false);
      refetch();
    },
    onError(error, variables, context) {
      message.error('Cập nhật không thành công');
    },
  });
  function handleCreate(value: any) {
    if (editId) {
        const formUpdate = {
            ProductId: editId,
            ...value
      }
      updateMutation.mutate(formUpdate);
    }else{
      createMutation.mutate(value);
    }
  }
  const { data } = useQuery(['Product'], () => productService.getProductById(editId as number), {
    enabled: isEditIdValidNumber,
  });
  useEffect(() => {
    if (editId && data) {
      form.setFieldsValue(data);
    }
  }, [data]);
  return (
    <Modal title={editId ? `Chỉnh sửa sản phẩm` : 'Tạo sản phẩm mới'} centered open={open} width={1000} footer={false}>
      <Form
        form={form}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={handleCreate}
        autoComplete='off'
        layout='vertical'
      >
        <Form.Item label='Tên' name='name' rules={[{ required: true, message: 'Vui lòng nhập sản phẩm' }]}>
          <Input />
        </Form.Item>

        <Form.Item label='Nhà sản xuất' name='manufacturer' rules={[{ required: true, message: 'Vui lòng nhập nhà sản xuất' }]}>
          <Input />
        </Form.Item>
        
        <Form.Item label='Giá' name='price' rules={[{ required: true, message: 'Vui lòng nhập giá' }]}>
          <Input type='number' />
        </Form.Item>

        <Form.Item label='Ảnh' name='image' rules={[{ required: true, message: 'Vui lòng nhập ảnh' }]}>
          <Input />
        </Form.Item>

        <Form.Item label='Ưu đãi' name='promotion' rules={[{ required: true, message: 'Vui lòng nhập ưu đãi' }]}>
          <Input type='number' />
        </Form.Item>

        <Form.Item label='Kích thước màn hình' name='displaySize' rules={[{ required: true, message: 'Vui lòng nhập kích thước màn hình' }]}>
          <Input type='number'/>
        </Form.Item>

        <Form.Item label='Hệ điều hành' name='operatingSystem' rules={[{ required: true, message: 'Vui lòng nhập hệ điều hành' }]}>
          <Input />
        </Form.Item>

        <Form.Item label='Loại màn hình' name='displayType' rules={[{ required: true, message: 'Vui lòng nhập loại màn hình' }]}>
          <Input />
        </Form.Item>

        <Form.Item label='Camera trước' name='frontCam' rules={[{ required: true, message: 'Vui lòng nhập camera trước ' }]}>
          <Input />
        </Form.Item>

        <Form.Item label='Camera sau' name='backCam' rules={[{ required: true, message: 'Vui lòng nhập camera sau' }]}>
          <Input />
        </Form.Item>
        
        <Form.Item label='Bộ nhớ tạm' name='ram' rules={[{ required: true, message: 'Vui lòng nhập bộ nhớ tạm' }]}>
          <Input type='number' />
        </Form.Item>

        <Form.Item label='Bộ nhớ trong' name='rom' rules={[{ required: true, message: 'Vui lòng nhập bộ nhớ trong' }]}>
          <Input type='number' />
        </Form.Item>
        
        <Form.Item label='Pin' name='battery' rules={[{ required: true, message: 'Vui lòng nhập pin' }]}>
          <Input type='number' />
        </Form.Item>

        <Form.Item label='Chip' name='chipset' rules={[{ required: true, message: 'Vui lòng nhập chip' }]}>
          <Input />
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

export default FormProduct;
