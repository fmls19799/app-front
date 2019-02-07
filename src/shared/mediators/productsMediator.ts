import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './../../models/product';

@Injectable()
export class ProductsMediator {
    
    private productsByUserSubject: BehaviorSubject<Array<Product>> = new BehaviorSubject(null);
    
    constructor() { }

    emitProducts(products: Array<Product>){
        console.log(2, products);
        
        this.productsByUserSubject.next(products);
        console.log(3, this.productsByUserSubject);
        
    }

    getProductUpdatedFromSubject(){
        console.log(5);
        
        return this.productsByUserSubject.asObservable();
    }
    
}