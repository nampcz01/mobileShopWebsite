import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import { useAppSelector } from '@/hooks/useRedux';
import { useMutation } from '@tanstack/react-query';
import { Button, Col, Form, Input, message, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import { authService } from 'src/shared/services/authentication.service';
const ChangePassword = () => {
  const { user } = useAppSelector(state => state.appSlice);
  const router = useRouter();
  const updateMutation = useMutation({
    mutationFn: (body: { username: string, currentPassword: string, newPassword: string }) =>
      authService.resetPassword(body),
    onSuccess(data, _variables, _context) {
      if (!data) return;
      message.success('Thay đổi thành công');
    },
    onError(error, variables, context) {
      message.error('Thay đổi không thành công');
    },
  });

  function handleResetPassword(value: any) {
    const formUpdate = {
      username: user?.username as string,
      currentPassword: value.currentPassword as string,
      newPassword: value.newPassword2 as string,
    };
    updateMutation.mutate(formUpdate);
  }

  return (
    <>
      <Row justify={'space-between'} gutter={[16, 16]} align={'middle'}>
        <Col span={24}>
          <Typography.Title level={2} className='mx-auto center'>
            Thay đổi mật khẩu
          </Typography.Title>
        </Col>
        <Col span={24}>
          <Form
            layout='vertical'
            name='basic'
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handleResetPassword}
            autoComplete='off'
          >
            <Form.Item
              label='Mật khẩu hiện tại'
              name='currentPassword'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label='Mật khẩu mới'
              name='newPassword1'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label='Xác nhận mật khẩu'
              name='newPassword2'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Row align={'middle'} gutter={16}>
              <Col span={12}>
                <Form.Item className='w-full'>
                  <Button className='w-full' htmlType='button' onClick={() => router.push('/')}>
                    Huỷ
                  </Button>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item className='w-full'>
                  <Button className='w-full' htmlType='submit' loading={updateMutation.isLoading}>
                    Cập nhật
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};
ChangePassword.getLayout = (children: React.ReactNode) => <DashboardLayout>{children}</DashboardLayout>;
export default ChangePassword;
