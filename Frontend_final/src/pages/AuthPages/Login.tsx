/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Checkbox, Col, Form, Input, message, Row } from "antd";
import { login } from "../../service/user.service";
import jwt_decode from "jwt-decode";
import useNavigate from "../../hooks/useNavigate";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";

const Login = () => {
  const [, setToken] = useCookies(["token"]);
  const [, setRole] = useCookies(["role"]);
  const { navigateTo } = useNavigate();

  // const loginMutation = useMutation({
  //   mutationFn: (value) => (
  //     // const {remember, ...request} = value;
  //     login({value.username, value.password})),
  //   onSuccess(data: any) {
  //     console.log(data)
  //     // if (!data.token) return;
  //     const decodeData: any = jwt_decode(data.token);
  //     if (decodeData) {
  //       message.success("Đăng nhập thành công");
  //       setRole("role", decodeData.role, {
  //         path: "/",
  //         httpOnly: true,
  //         secure: true,
  //       });
  //       setToken("token", data.token, {
  //         path: "/",
  //         httpOnly: true,
  //         secure: true,
  //       });
  //       if (decodeData.role === "Admin") {
  //         navigateTo("/admin");
  //       } else {
  //         navigateTo("/");
  //       }
  //     }
  //   },
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   onError(error) {
  //     message.error("Đăng nhập không thành công");
  //   },
  // });

  const handleLogin = async (value: { username: string; password: string }) => {
    console.log(value);
    try {
      const {
        data: { token, role },
        status,
      } = await login(value);
      if (status === 200) {
        setRole("role", role, {
          path: "/",
          httpOnly: true,
          secure: true,
        });
        setToken("token", token, {
          path: "/",
          httpOnly: true,
          secure: true,
        });
        if (role === "ADMIN") {
          navigateTo("/admin");
        } else {
          navigateTo("/");
        }
      }
    } catch (error) {
      message.error("Đăng nhập không thành công");
    }
  };

  return (
    <>
      <div className="relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative md:h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 login-background"
            style={{
              //   backgroundImage: `url("/bg-login.jpg")`,
              backgroundOrigin: "initial",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backdropFilter: "blur(3px)",
            }}
          />
          <div
            className={`bg-black absolute top-0 left-0 w-full h-full opacity-50`}
          ></div>

          <div className="relative z-20 h-10 flex justify-start text-lg font-medium">
            <b>MOBILE SHOP</b>
          </div>
          <div className="relative z-20 mt-auto">
            <h1 className="text-4xl font-semibold tracking-tight">
              <div className="text-yellow-400">MOBILE SHOP</div>
              <div>SYSTEM</div>
            </h1>
            <p className="mt-4 text-lg">
              Quý khách hãy đăng nhập để có một trải nghiệm mua sắm tốt hơn!
              Nhận ngay Ưu đãi hấp dẫn mùa tựu trường!!! Giảm ngay từ 5%-15% với
              các sản phẩm như điện thoại dành riêng cho các bạn học sinh sinh
              viên,
            </p>
          </div>
          <div className="relative z-20 mt-auto">
            <p className="text-lg">Copyright &copy; Mobile Shop 2023</p>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
            <div className="font-bold text-3xl text-center w-full text-black">
              Đăng nhập
            </div>
            <Card className="shadow" size="default">
              <Form
                name="basic"
                style={{ maxWidth: 700 }}
                initialValues={{ remember: true }}
                onFinish={handleLogin}
                autoComplete="off"
                className="border-b-2 border-b-slate-200"
              >
                <Form.Item
                  label="Tên đăng nhập"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  label="Mật khẩu"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password size="large" />
                </Form.Item>

                <Row gutter={16} justify={"space-between"}>
                  <Col span={12}>
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Ghi nhớ</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col className="text-right" span={12}>
                    <p
                      onClick={() => navigateTo("/forgot-password")}
                      className="m-0 p-0"
                    >
                      Quên mật khẩu?
                    </p>
                  </Col>
                </Row>

                <Form.Item className="w-full text-center">
                  <Button
                    className="w-1/2"
                    htmlType="submit"
                    // loading={loginMutation.isLoading}
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
              <p className="mt-3">
                Chưa có tài khoản?{" "}
                <strong
                  className="hover:text-blue-400 cursor-pointer"
                  onClick={() => navigateTo("/register")}
                >
                  Đăng ký
                </strong>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
