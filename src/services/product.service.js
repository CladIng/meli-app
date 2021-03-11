
import HttpService from './http.service'

class ProductService {

  _httpService = new HttpService();

  getProducts(search) {
    let params = {
      q: search
    }
    return this._httpService.httpGet(`api/items`, params);
  }
  
  getDetailProduct(product_id) {
    let params = {}
    return this._httpService.httpGet(`api/items/${product_id}`, params);
  }

}

export default ProductService;