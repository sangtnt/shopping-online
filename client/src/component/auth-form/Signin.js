import React, { Component } from 'react';
class Signin extends Component{
    componentDidMount(){
        document.body.classList.add('form-body');
    }
    componentWillUnmount(){
        document.body.classList.remove('form-body');
    }
    render(){
        return (
            <div>
                <form action="" class="login-form">
                    <img src="../images/Logo.png" alt="logo" class="logo"/>
                    <h2 class="title">Đăng nhập</h2>
                    <input placeholder="Tên tài khoản" name="username" class="form-input" type="text"/>
                    <input placeholder="Mật khẩu" name="password" class="form-input" type="password"/>
                    <button>Đăng nhập</button>
                    <p><input type="checkbox"/><span class="check-text">Nhớ mật khẩu</span></p>
                    <p><a class="forgot-password" href="">Quên tài khoản hoặc mật khẩu?</a></p>
                    <p>Bạn chưa có tài khoản?- <a class="sign-up" href=""> Đăng ký</a></p>
                </form>
            </div>
        )
    }
}
export default Signin;