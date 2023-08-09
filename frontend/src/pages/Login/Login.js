import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import {pawdRegExp} from "./../../utils/utils"
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

///
// import AuthContext from "../../context/AuthProvider";
// import loginApi from "../../Api/loginApi";
// import { useCookies } from 'react-cookie';
// import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles)
//schema loginform
const loginSchema = yup.object().shape({
  username: yup.string().required('Tên người dùng là bắt buộc'),
  password: yup.string().required('Mật khẩu là bắt buộc')
  .matches(pawdRegExp, 'Mật khẩu ít nhất 8 ký tự bao gồm số, chữ cái thường, chữ cái viết hoa, kí tự đặc biệt.'),
});


function Login() {
  // const [cookies, setCookie] = useCookies(['accessToken']);
  // const [errMsg, setErrMsg] = useState('');
  // const [sucessMsg, setSucessMsg] = useState('')
  // const { setAuth } = useContext(AuthContext);
  //
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const {register, handleSubmit, reset, formState: { errors }, control } = useForm({
    defaultValues: {
    username: '',
    password: '',
    keepLogin: false,
  },
  resolver: yupResolver(loginSchema)
  });

  const onSubmit = (data) => {
    const newUser = data 
    console.log(newUser);
    loginUser(newUser, dispatch, navigate );
    //reset()
  }

  const loginForm = (
    <div className={cx("form")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cx("input-container")}>
          <label className={cx("label")}>Tên người dùng<p className={cx("rq")}>*</p></label>
          <input {...register("username")} placeholder="yourname@gmail.com" className={cx("input")} type="text" name="username" 
          errors={errors} control={control}/>
          <p className={cx('error')}>{errors.username?.message}</p>


          <label className={cx("label")}>Mật khẩu<p className={cx("rq")}>*</p> </label>
          <input {...register("password")} placeholder="Nhập mật khẩu của bạn" className={cx("input")} type="password" name="password" 
          errors={errors} control={control}/>
          <p className={cx('error')}>{errors.password?.message}</p>

        </div>
        <div className={cx("input-container")}>
          <div className={cx('remember')}>

            <input {...register("keepLogin")} type="checkbox" errors={errors} control={control} name="keepLogin"/>
            
            <span className={cx("remember-text")}>Duy trì đăng nhập</span>
            <a className={cx('forgotPass')} href="/">Quên mật khẩu?</a>
          </div>
        </div>
        <div>
          <button className={cx("button-container")} type="submit">Đăng nhập</button> 

          <div className={cx('create-user')}>
            <p className={cx('text')}>Bạn chưa có tài khoản?</p> 
            <a className={cx('create-link')} href="/create-account">Tạo tài khoản</a>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className={cx("wrapper")}>
     <div className={cx('body')}>
        <div className={cx("login-form")}>
          <h2 className={cx("title")}>Đăng nhập</h2>
          <h6 className={cx("placehoder-text")}>Đăng nhập để sử dụng nhiều chức năng hơn!</h6>
          {loginForm} 
        </div>
     </div>
    </div>
  );

}

export default Login;