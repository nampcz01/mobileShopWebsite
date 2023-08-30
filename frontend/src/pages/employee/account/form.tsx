import { useAppSelector } from '@/hooks/useRedux';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Form, message, Modal, Row, Col, Input, Select } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useEffect, useState } from 'react';
import { accountService } from 'src/shared/services/account.service';
import { productService } from 'src/shared/services/product.service';
import { transactionService } from 'src/shared/services/transaction.service';
import { IAccountAdd } from 'src/shared/types/account.type';
import { IRecharge } from 'src/shared/types/transaction.type';

interface Props {
  editId?: number;
  open: any;
  setOpen: any;
  refetch: any;
}
const FormAccount = ({ editId, open, setOpen, refetch }: Props) => {
  const [form] = useForm();
  const { user } = useAppSelector(state => state.appSlice);
  const [productId, setProductId] = useState<number>();
  const isEditIdValidNumber = typeof editId === 'number';
  const createMutation = useMutation({
    mutationFn: (body: IAccountAdd) => accountService.createAccount(body),
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
  const rechargeMutation = useMutation({
    mutationFn: (body: IRecharge) => transactionService.rechargeMoney(body),
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
      const rechargeMoney = {
        userId: editId,
        amount: value.amount
      };
      rechargeMutation.mutate(rechargeMoney);
    } else {
      const formCreate = {
        productId: productId,
        ...value,
      };
      createMutation.mutate(formCreate);
    }
  }
  const { data } = useQuery(['Account'], () => accountService.getAccountByUserId(editId as number), {
    enabled: isEditIdValidNumber,
  });
  useEffect(() => {
    if (editId && data) {
      form.setFieldsValue(data);
    }
  }, [data]);
  return (
    <Modal title={editId ? `Chỉnh sửa tài khoản` : 'Tạo tài khoản mới'} centered open={open} width={1000} footer={false}>
      <Form
        form={form}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={handleCreate}
        autoComplete='off'
        layout='vertical'
      >
        <Form.Item label='Số tiền' name='amount' rules={[{ required: true, message: 'Vui lòng nhập số lượng' }]}>
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

export default FormAccount;
