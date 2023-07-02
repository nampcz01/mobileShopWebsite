import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles)
function Login() {
    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1" 
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={cx("error")}>{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className={cx("form")}>
      <form onSubmit={handleSubmit}>
        <div className={cx("input-container")}>
          <label className={cx("label")}>Username<p className={cx("error")}>*</p></label>
          
          <input placeholder="yourname@gmail.com" className={cx("input")} type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className={cx("input-container")}>
          <label className={cx("label")}>Password<p className={cx("error")}>*</p> </label>
          <input placeholder="Nhập mật khẩu của bạn" className={cx("input")} type="password" name="pass" required />
          {renderErrorMessage("pass")}
          <div className={cx('remember')}>
            <input type="checkbox" />
            <span className={cx("remember-text")}>Duy trì đăng nhập</span>
            <a className={cx('forgotPass')} href="/">Quên mật khẩu?</a>
          </div>
        </div>
        <div>
          <input className={cx("button-container")} type="submit" />

          <div className={cx('create-user')}>
            <p className={cx('text')}>Bạn chưa có tài khoản?</p> 
            <a className={cx('create-link')} href="/">Tạo tài khoản</a>
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
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
     </div>
    </div>
  );

}

export default Login;