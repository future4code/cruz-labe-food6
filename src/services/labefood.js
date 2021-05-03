import axios from 'axios'

axios.defaults.baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsB';

const login = (body) => {
  const request = axios.post('/login', body)
  return request.then((response) => response.data)
}

const signup = (body) => {
  const request = axios.post('/signup', body)
  return request.then((response) => response.data)
}

export default { login, signup}
