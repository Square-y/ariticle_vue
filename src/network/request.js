import axios from 'axios'

function request(config) {
    const instance_article = axios.create({
        // baseURL:'/api',
        timeout:5000    
    })
    return instance_article(config)
}

export default request


