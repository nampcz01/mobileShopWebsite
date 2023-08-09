import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {pawdRegExp} from "./../../utils/utils"
import classNames from "classnames/bind";
import styles from "./createAccount.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../redux/apiRequest";


const cx = classNames.bind(styles)
//yup
const registerSchema = yup.object().shape({
    name: yup.string().required('Tên người dùng là bắt buộc'),
    email: yup.string().email().required('Email là bắt buộc'),
    password: yup.string().required('Mật khẩu là bắt buộc')
    .matches(pawdRegExp, 'Mật khẩu ít nhất 8 ký tự bao gồm số, chữ cái thường, chữ cái viết hoa, kí tự đặc biệt.'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Mật khẩu xác nhận không khớp')
});

function CreateAccount() {
    // //const [dataRe,setDataRe] = useState()
    // const [errMsg, setErrMsg] = useState('');
    // const [sucessMsg, setSucessMsg] = useState('')
    // const [response, setResponse] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    //use form
    const {register, handleSubmit, reset, formState: { errors }, control } = useForm({
            defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        resolver: yupResolver(registerSchema)
    });
    const onSubmit = (data) => {
        const registerData = data
        console.log(registerData);
        registerUser(registerData, dispatch, navigate)
        reset();
      }
    const renderForm = (
        <div className={cx("form")}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cx("input-container")}>
                <label className={cx("label")}>Tên người dùng<p className={cx("rq")}>*</p></label>
                <input {...register("name")} placeholder="Nhập tên của bạn" className={cx("input")} type="text"  
                name= 'name' errors={errors} control={control} />
                <p className={cx('error')}>{errors.name?.message}</p>

                <label className={cx("label")}>Email<p className={cx("rq")}>*</p></label>
                <input {...register("email")} placeholder="yourname@gmail.com" className={cx("input")} type="text" 
                name='email' errors={errors} control={control} />
                <p className={cx('error')}>{errors.email?.message}</p>

                <label className={cx("label")}>Mật khẩu<p className={cx("rq")}>*</p> </label>
                <input {...register("password")} placeholder="Nhập mật khẩu của bạn" className={cx("input")} type="password" 
                name='password' errors={errors} control={control} />
                <p className={cx('error')}>{errors.password?.message}</p>

                <label className={cx("label")}>Xác nhận lại mật khẩu<p className={cx("rq")}>*</p> </label>
                <input {...register("confirmPassword")} placeholder="Nhập lại mật khẩu của bạn" className={cx("input")} type="password" 
                name='confirmPassword' errors={errors} control={control} />
                <p className={cx('error')}>{errors.confirmPassword?.message}</p>
            </div>
            <div>
            <button className={cx("button-container")} type="submit">Đăng ký</button>
            <div className={cx('create-user')}>
                <p className={cx('text')}>Bạn đã có tài khoản?</p> 
                <a className={cx('create-link')} href="/login">Đăng nhập</a>
                {/* {response ? (
                (
                    <section className={cx('noitice')}>
                        <h1 className={cx('doneMsg')}>{sucessMsg}</h1>
                        <p className={cx('doneMsg')}>
                            <a href="/login">Đăng nhập</a>
                        </p>
                    </section>
                ) 
                ) : 
                <section>
                    <h1 className={cx('doneMsg')}>{errMsg}</h1>
                </section>
                        } */}
            </div>
            </div>
        </form>
        </div>
    );

    return (
        <div className={cx("wrapper")}>
        <div className={cx('body')}>    
            <div className={cx("login-form")}>
            <h2 className={cx("title")}>Đăng ký tài khoản</h2>
            <h6 className={cx("placehoder-text")}>Hãy đăng ký tài khoản để sử dụng nhiều chức năng hơn!</h6>
            {renderForm} 
            
            </div>
        </div> 
        </div>
    );
    }

export default CreateAccount;