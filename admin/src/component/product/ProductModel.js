import React, { Component } from 'react';
import axios from 'axios';
import {Modal ,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { store } from 'react-notifications-component';
import 'animate.css';
class ProductModel extends Component {
    constructor(){
        super();
        this.state={
            product: {}
        }
    }
    componentDidMount(){
        this.getProduct();
    }
    getProduct=()=>{
        let {proId} = this.props.match.params;
        axios.get(`/product/getProById/${proId}`)
        .then(product=>{
            this.setState({
                product: {...product.data.product[0]}
            })
        })
        .catch(err=> console.log(err));
    }
    closeModel=()=>{
        let {history} = this.props;
        history.goBack();
    }
    deleteProduct= ()=>{
        let {product} = this.state;
        let {history} = this.props;
        axios.get(`/product/delete/${product.pro_id}`)
        .then((res)=>{
            store.addNotification({
                title: "Successfully!",
                message: res.data,
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 2000,
                  onscreen: true
                }
              });
            history.goBack();
        })
        .catch(err=>{
            store.addNotification({
                title: "Fail!",
                message: "Delete Fail!",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 2000,
                  onscreen: true
                }
            });
        })
    }
    render() {
        let {product} =this.state;
        return (
            <div>
                <Modal
                    size="lg"
                    show={true}
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {product.pro_name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="user-contain">
                            <img className="user-info-img" src={product.pro_image}/>
                            <div className="user-info user-info-key">
                                <p>
                                    Price:<br/>
                                    Quantity:<br/>
                                    Date:<br/>
                                    Rating:<br/>
                                    Sold:
                                </p>
                            </div>
                            <div className="user-info">
                                {product.pro_price} <br/>
                                {product.pro_quantity} <br/>
                                {product.pro_date} <br/>
                                {product.pro_rating} <br/>
                                {product.pro_sold}
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to={`/users/update/`}><Button variant="secondary">Edit</Button></Link>
                        <Button onClick={this.deleteProduct} variant="danger">Delete</Button>
                        <Button onClick={this.closeModel} variant="outline-danger">Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ProductModel;