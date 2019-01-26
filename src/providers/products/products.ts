import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../../config/config.int';
import { Product } from './../../models/product';

@Injectable()
export class ProductsProvider {
  
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  
  constructor(public http: HttpClient) {
  }
  
  getAllProducts(){
    //QUITAR EL MOCK???
    // return this.http.post<Product>(`${ProductsProvider.ENDPOINT}/register`, {'hola': 'das'}).map((data: any) => data);
    
  
    return this.http.get<Array<Product>>('http://www.mocky.io/v2/5c4b79713200005b001fa713').map((products: Array<Product>)=> products);
    
    
    
    // let productMock = [
    //   {
    //     "name": "coche 1",
    //     "description": "bdsadas",
    //     "price": 120000,
    //     "km": 54654,
    //     "category": "car",
    //     "status": "rented"
    //   },
    //   {
    //     name: 'Coche 2',
    //     description: 'blablablablablablablablablablablablablablabla',
    //     price: 220000,
    //     km: 459045,
    //     category: 'car',
    //     status: 'sold'
    //   },
    //   {
    //     name: 'Coche 3',
    //     description: 'blablablablablabla',
    //     price: 140000,
    //     km: 74665,
    //     category: 'car',
    //     status: 'sold'
    //   },
    //   {
    //     name: 'Coche 4',
    //     description: 'blablablablablablablablablablablablablablablablablablablablablablablabla',
    //     price: 12000,
    //     km: 654456,
    //     category: 'car',
    //     status: 'rented' // if rented apply remaining time
    //   },
    //   {
    //     name: 'Coche 5',
    //     description: 'blablabla',
    //     price: 33000,
    //     km: 332321,
    //     category: 'car',
    //     status: 'sold'
    //   },
    //   {
    //     name: 'Coche 6',
    //     description: 'blablablablablabla',
    //     price: 2800,
    //     km: 312312,
    //     category: 'car',
    //     status: 'gifted'
    //   },
    //   {
    //     name: 'Coche 1',
    //     description: 'blablabla',
    //     price: 120000,
    //     km: 54654,
    //     category: 'car',
    //     status: 'rented'
    //   }
    //   // TENER EN CUENTA QUE DEPENDIENDO DE LA CATEGORIA, TENDRE UNOS CAMPOS O OTROS, Y UN MODELO O OTRO en back y front?????? 
    // ]
    // return productMock;
  }
}
