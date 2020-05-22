import React, { Component } from 'react';
import axios from 'axios';
import {Modal ,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { store } from 'react-notifications-component';
import 'animate.css';
class CategoryModel extends Component {
    constructor(){
        super();
        this.state={
            category: {}
        }
    }
    componentDidMount(){
        this.getCategory();
    }
    getCategory=()=>{
        let catId = 2
        axios.get(`/category/getCatById/${catId}`)
        .then(category=>{
            this.setState({
                category: {...category.data.category[0]}
            })
        })
        .catch(err=> console.log(err));
    }
    closeModel=()=>{
        let {history} = this.props;
        history.goBack();
    }
    deleteCategory= ()=>{
        let {category} = this.state;
        let {history} = this.props;
        axios.get(`/category/delete/${category.catId}`)
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
        let {category} =this.state;
        return (
            <div>
                <Modal
                    size="lg"
                    show={true}
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {category.catName}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="user-contain">
                            <img className="user-info-img" src={category.catImage}/>
                            <div className="user-info user-info-key">
                                <p>
                                    Age:<br/>
                                    Email:<br/>
                                    Phone:<br/>
                                    Country:
                                </p>
                            </div>
                            <div className="user-info">
                                {/* {user.age} <br/>
                                {user.email} <br/>
                                {user.phone} <br/>
                                {user.country} */}
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to={`/users/update/`}><Button variant="secondary">Edit</Button></Link>
                        <Button onClick={this.deleteCategory} variant="danger">Delete</Button>
                        <Button onClick={this.closeModel} variant="outline-danger">Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CategoryModel;