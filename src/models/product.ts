import { User } from "./user";

export class Product {
    _id?: string; // CUANDO LO CREO NO TIENE ID???
    
    name: string;
    icon?: string;
    description: string;
    price: number;
    type: string;
    photos: Array<File> = [];
    owner?: User;
    rentOrBuy: string;

    km: number;
    randomHeight?: any;
    // opacity?: boolean; // NO SIEMPRE TENEMOS OPACTIDAD???
    
    
    // asFormData(): any{         
    //     const data = new FormData();
        
    //     data.append('name', this.name);
    //     data.append('icon', this.icon);
    //     data.append('description', this.description);
    //     data.append('price', (this.price).toString());
    //     data.append('type', this.type);
        
    //     for (const photo of this.photos) {
    //         data.append('photos', photo);
    //     }
    //     return data;
    // }
    
    
    
}
