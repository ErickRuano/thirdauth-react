import axios from 'axios'

const BASE = 'https://api.thirdauth.com'

export const instance = axios.create({
    baseURL: BASE,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
  });
  

export const request = (url, method, params) => {
   
    return new Promise((resolve, reject) => {
        instance[method](BASE + url, params)
        .then((response) => {
            resolve({response})
        })
        .catch((error) => {
            reject({error})
        })
    })
}
