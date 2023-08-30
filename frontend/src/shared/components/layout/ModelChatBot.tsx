import { Affix, Popover } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';
import { Form, Input } from 'antd';

const ContainerBoxChat = () => {
  const [form] = useForm();
  const handleChat = () => {

  }
  return (
    <Form
      form={form}
      name='basic'
      initialValues={{ remember: true }}
      onFinish={handleChat}
      autoComplete='off'
      layout='vertical'
    >
      <Form.Item name='name' rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}>
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};
const ModelChatBot = () => {
  return (
    <Affix className='float-right mr-10' offsetBottom={20}>
      <Popover content={<ContainerBoxChat />} title='ChatBot' trigger='click'>
        <MessageOutlined className='text-2xl cursor-pointer' />
      </Popover>
    </Affix>
  );
};

export default ModelChatBot;
