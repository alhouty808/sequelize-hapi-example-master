import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";
import 'rxjs/Rx';
@Injectable()
export class ItemService{
    items =[];
    constructor(private _http:Http){
        
    }
    getItems() : Observable<any> {
         
        
        return  this._http.get('/api/item').map(response => response.json());
    }

    addItem(item:string): Observable<any> {
        return this._http.post('/api/add/'+item).map(response => response.json());
    }
    
    deleteItem(item:string): Observable<any>{
       return this._http.get('/api/delete/'+item).map(response => response.json());
    }
    
}
