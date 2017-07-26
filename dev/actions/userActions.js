import Request from 'superagent';

export function userSignupRequest(email, password) {
    return dispatch => {
        return Request
            .post('http://localhost:8088/services/registration/register')
            .send('firebaseid=WEB')
            .send('email=' + email)
            .send('password=' + password)   
    }
}

export function getAllForecastsRequest(address) {
    return dispatch => {
        return Request
            .get('http://localhost:8088/services/allforecasts/get')
            .query({ address: address })
    }    
}