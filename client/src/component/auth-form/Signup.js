import React, { Component } from 'react';
class Signup extends Component{
    componentDidMount(){
        document.body.classList.add('form-body');
    }
    componentWillUnmount(){
        document.body.classList.remove('form-body');
    }
    render(){
        return(
                <form action="" class="login-form">
                    <img src="../images/Logo.png" alt="logo" class="logo"/>
                    <h2 class="title">Đăng ký</h2>
                    <input placeholder="Họ và tên" name="fullname" class="form-input" type="text" required/>
                    <input placeholder="Tên tài khoản" name="username" class="form-input" type="text" required/>
                    <input placeholder="Số điện thoại hoặc email" name="email" class="form-input" type="email" required/>
                    <input placeholder="Mật khẩu" name="password" class="form-input" type="password" required/>
                    <p>Giới tính:
                        <input name="sex" type="radio" required/><span class="radio-text">Nam</span>
                        <input name="sex" type="radio" required /><span class="radio-text">Nữ</span>
                    </p>
                    <button type="submit">Đăng ký</button>
                    <p><input type="checkbox"/><span class="check-text">Nhớ mật khẩu</span></p>
                </form>
        )
    }
}

export default Signup;