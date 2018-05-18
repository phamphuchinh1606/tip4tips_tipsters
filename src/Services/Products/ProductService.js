import * as URL from '../../API/URL';
import apiCaller from '../../API/apiCaller';

export function* fetchProducts(){
    let products = {};
    let urlEndPoint = URL.END_POINT_PRODUCT_LIST;
    yield apiCaller(urlEndPoint,"GET", null).then(res=>{
        products = res.data;
    });
    return products;
}
