import { Injectable } from '@angular/core';
import { ProductUpdate,Product } from './product.model';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 

   formData : Product;

   
  constructor(private http :HttpClient) { }

  postProduct(formData:ProductUpdate)
  {
     let rootURL ="https://demo-apimanagementservice.azure-api.net/productService/AddProduct";
      let headers = new HttpHeaders({'Content-Type':  'application/json',
    'Ocp-Apim-Subscription-Key': '1309c6c8569c4d0fb92fecbff8afc079'});
    let response= this.http.post(rootURL,formData,{headers});
    console.log(response);
    return response;

   
  }
}
