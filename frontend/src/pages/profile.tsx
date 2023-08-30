import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import { useAppSelector } from '@/hooks/useRedux';
import { Row, Col, Form, Input } from 'antd';

const Profile = () => {
  const { user } = useAppSelector(state => state.appSlice);
  return (
    <Row className='h-screen w-full' gutter={[16, 16]}>
      <Col span={24}>
        <Form
          name='basic'
          layout='vertical'
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete='off'
        >
          <Form.Item label='Tên người dùng' name='username'>
            <Input disabled placeholder={user?.username} />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label='Email' name='email'>
                <Input disabled placeholder={user?.email} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

Profile.getLayout = (children: React.ReactNode) => <DashboardLayout>{children}</DashboardLayout>;
export default Profile;
