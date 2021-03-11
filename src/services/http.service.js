// Enviroment
import { environment } from './../environments/environment';

import axios from 'axios'

class HttpService {

  endPoint = environment.endpoint;

  constructor() { }

  httpGet(url, params) {
    return axios.get(this.endPoint + url, { params });
  }

  httpPost(url, params) {
    // code
  }

  httpPut(url, params) {
    // code
  }

}

export default HttpService;