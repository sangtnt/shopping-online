import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuestionCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class MenuTop extends Component {
    render() {
        return (
            <Col className="menu-top">
                <div className="menu-top-item menu-item-split"><Link to="/">Người bán hàng</Link></div>
                <div className="menu-top-item">
                    <span className="link-item">Kết nối</span>
                    <a href="https://www.facebook.com/">
                        <FontAwesomeIcon className="icon icon-brand" icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/">
                        <FontAwesomeIcon className="icon icon-brand" icon={faInstagram} />
                    </a>
                </div>
                <div className="menu-top-space"></div>
                <div className="menu-top-item"><Link to="/"><FontAwesomeIcon className="icon" icon={faBell} />Thông báo</Link></div>
                <div className="menu-top-item"><Link to="/"><FontAwesomeIcon className="icon" icon={faQuestionCircle} />Trợ giúp</Link></div>
                <div className="menu-top-item menu-item-split"><Link to="/signup">Đăng ký</Link></div>
                <div className="menu-top-item"><Link to="/signin">Đăng nhập</Link></div>
            </Col>
        );
    }
}

export default MenuTop;