import axios from 'axios';

export default axios.create({
    LoginUrl: 'http://localhost:9002/api/users'
});