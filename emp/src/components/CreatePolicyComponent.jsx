import React, { Component } from 'react'
import EmployeeService from '../services/PolicyService';

class CreatePolicyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            policyname: '',
            category: '',
            description: ''
        }
        this.changepolicynameHandler = this.changepolicynameHandler.bind(this);
        this.changecategoryHandler = this.changecategoryHandler.bind(this);
        this.saveOrUpdatepolicy = this.saveOrUpdatepolicy.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getpolicyId(this.state.id).then( (res) =>{
                let policy = res.data;
                this.setState({policyname: policy.policyname,
                    category: policy.category,
                    description : policy.description
                });
            });
        }        
    }
    saveOrUpdatepolicy = (e) => {
        e.preventDefault();
        let policy = {policyname: this.state.policyname, category: this.state.category, description: this.state.description};
        console.log('policy => ' + JSON.stringify(policy));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createpolicy(policy).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updatepolicy(policy, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changepolicynameHandler= (event) => {
        this.setState({policyname: event.target.value});
    }

    changecategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }

    changedescription= (event) => {
        this.setState({description: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Policy</h3>
        }else{
            return <h3 className="text-center">Update Policy</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Policy Name: </label>
                                            <input placeholder="Policy Name" name="policyname" className="form-control" 
                                                value={this.state.policyname} onChange={this.changepolicynameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category: </label>
                                            <input placeholder="Category" name="category" className="form-control" 
                                                value={this.state.category} onChange={this.changecategoryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changedescription}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdatepolicy}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreatePolicyComponent
