import axios from 'axios'
import { baseurl } from './components/Constants/Constants'

const instance =axios.create({
    baseURL:baseurl,
})

export default instance