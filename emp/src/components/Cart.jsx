import React, { Component } from 'react'
import axios from 'axios';
import PolicyService from '../services/PolicyService'
//import {Link} from "react-router-dom";
//import {Button} from "react-bootstrap";

//import Login from './Login';

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
                cart: []
        }
        this.addpolicy = this.addpolicy.bind(this);
        this.editpolicy = this.editpolicy.bind(this);
        this.deletepolicy = this.deletepolicy.bind(this);
    }

    deletepolicy(id){
        PolicyService.deletepolicy(id).then( res => {
            this.setState({cart: this.state.cart.filter(cart => cart.id !== id)});
        });
    }
    viewpolicy(id){
        //this.props.history.push(`/view-employee/${id}`);
        this.state.cart.forEach(item=>{
            if(item.id===id){
                //this.createcart(item);
                axios.get("http://localhost:8080/api/v1/cart").then((res=>{
                    console.log(res)
                },(e)=>{
                    console.log(e)
                }))
            }
        })
    }
    editpolicy
    (id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        PolicyService.getcart().then((res) => {
            this.setState({ cart: res.data});
        });
    }

    addpolicy(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">My Cart</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addpolicy}> Add Policy</button>
                    
                    
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Policy Name</th>
                                    <th> Category</th>
                                    <th> Description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cart.map(
                                        cart => 
                                        <tr key = {cart.id}>
                                             <td> { cart.policyname} </td>   
                                             <td> {cart.category}</td>
                                             <td> {cart.description}</td>
                                             <td>
                                                
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletepolicy(cart.id)} className="btn btn-danger">Delete </button>
                                                 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default Cart