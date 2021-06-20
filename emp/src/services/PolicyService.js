import axios from 'axios';

const POLICY_API_BASE_URL = "http://localhost:8080/api/v1/policies";

const CART_API_BASE_URL = "http://localhost:8080/api/v1/cart";

class PolicyService {

    getpolicies(){
        return axios.get(POLICY_API_BASE_URL);
    }

    getcart(){
        return axios.get(CART_API_BASE_URL);
    }

    createcart(cart){
        return axios.post(CART_API_BASE_URL, cart);
    }
    
    createpolicy(policy){
        return axios.post(POLICY_API_BASE_URL, policy);
    }

    getpolicyId(policyId){
        return axios.get(POLICY_API_BASE_URL + '/' + policyId);
    }

    updatepolicy(policy, policyId){
        return axios.put(POLICY_API_BASE_URL + '/' + policyId, policy);
    }

    deletepolicy(policyId){
        return axios.delete(POLICY_API_BASE_URL + '/' + policyId);
    }

    deletepolicy(cart){
        return axios.delete(CART_API_BASE_URL + '/' + cart);
    }

}

export default new PolicyService()