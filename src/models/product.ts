export class Product {
    id?: number; // CUANDO LO CREO NO TIENE ID???
    name: string;
    icon?: string;
    description: string;
    price: number;
    type: string;
    photos: Array<File>;

    km: number;
    randomHeight?: any;
    opacity?: boolean; // NO SIEMPRE TENEMOS OPACTIDAD???


    public asFormData(): FormData{
        const data = new FormData();
        
        data.append('name', this.name);
        data.append('icon', this.icon);
        data.append('description', this.description);
        data.append('price', (this.price).toString());
        data.append('type', this.type);
        
        for (const photo of this.photos) {
            data.append('photos', photo);
        }
        
        return data;
    }
    


}
