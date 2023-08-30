import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input, Row, Col, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { productService } from 'src/shared/services/product.service';

const FormPayment = () => {
  const [form] = useForm();
  const createMutation = useMutation({
    mutationFn: (body: any) => productService.updateProduct(body),
    onSuccess(data, _variables, _context) {
      if (!data) return;
      message.success('Cập nhật thành công');
    },
    onError(error, variables, context) {
      message.error('Cập nhật không thành công');
    },
  });
  function handleCreate(value: any) {
      createMutation.mutate(value);
  }
  return (
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

      <Form.Item
        label='Nhà sản xuất'
        name='manufacturer'
        rules={[{ required: true, message: 'Vui lòng nhập nhà sản xuất' }]}
      >
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

      <Form.Item
        label='Kích thước màn hình'
        name='displaySize'
        rules={[{ required: true, message: 'Vui lòng nhập kích thước màn hình' }]}
      >
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
  );
};

export default FormPayment;
