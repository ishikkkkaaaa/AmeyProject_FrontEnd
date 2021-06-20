import React, { Component } from 'react'
import PolicyService from '../services/PolicyService'
//import {Link} from "react-router-dom";
//import {Button} from "react-bootstrap";

//import Login from './Login';

class ListPolicyComponent extends Component {
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
        this.props.history.push(`/view-employee/${id}`);
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
                                    this.state.policy.map(
                                        policy => 
                                        <tr key = {policy.id}>
                                             <td> { policy.policyname} </td>   
                                             <td> {policy.category}</td>
                                             <td> {policy.description}</td>
                                             <td>
                                                 <button onClick={ () => this.editpolicy
                                                    (policy.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletepolicy(policy.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewpolicy(policy.id)} className="btn btn-info">View </button>
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

export default ListPolicyComponent