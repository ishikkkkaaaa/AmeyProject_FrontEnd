import React, { Component } from 'react'
import PolicyService from '../services/PolicyService'

class ViewPolicyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            policy: {}
        }
    }

    componentDidMount(){
        PolicyService.getpolicyId(this.state.id).then( res => {
            this.setState({policy: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Policy Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Policy Name: </label>
                            <div> { this.state.policy.policyname }</div>
                        </div>
                        <div className = "row">
                            <label> Category: </label>
                            <div> { this.state.policy.category }</div>
                        </div>
                        <div className = "row">
                            <label> Description: </label>
                            <div> { this.state.policy.description }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPolicyComponent
