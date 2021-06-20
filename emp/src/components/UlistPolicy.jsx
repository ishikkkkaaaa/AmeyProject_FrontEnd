import axios from 'axios';
import React, { Component } from 'react'
import PolicyService from '../services/PolicyService'

import {createcart} from"../services/PolicyService";


class UlistPolicy extends Component {
    constructor(props) {
        super(props)

        this.state = {
                policy: []
        }
        this.addpolicy = this.addpolicy.bind(this);
        this.editpolicy = this.editpolicy.bind(this);
        this.deletepolicy = this.deletepolicy.bind(this);
    }

    deletepolicy(id){
        PolicyService.deletepolicy(id).then( res => {
            this.setState({policy: this.state.policy.filter(policy => policy.id !== id)});
        });
    }
    viewpolicy(id){
        //this.props.history.push(`/view-employee/${id}`);
        this.state.policy.forEach(item=>{
            if(item.id===id){
                //this.createcart(item);
                axios.post("http://localhost:8080/api/v1/cart",item).then((res=>{
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
        PolicyService.getpolicies().then((res) => {
            this.setState({ policy: res.data});
        });
    }

    addpolicy(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Policy List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addpolicy}> View My Cart</button>
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
                                    this.state.policy.map(
                                        policy => 
                                        <tr key = {policy.id}>
                                             <td> { policy.policyname} </td>   
                                             <td> {policy.category}</td>
                                             <td> {policy.description}</td>
                                             <td>
                                                 
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewpolicy(policy.id)} className="btn btn-info">Buy</button>
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

export default UlistPolicy