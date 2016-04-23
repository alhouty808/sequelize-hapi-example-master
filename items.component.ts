import {Component} from 'angular2/core';
import {ItemService} from './item.service.ts'
@Component({
    selector: 'ItemsList',
    template: `
        <p1>My Shopping List</p1><br/>
        <input type="text" #input>
        <button id="add" (click) = "addItem(input.value)">Add +</button><br/>
        <ol>
                    <li *ngFor="#item of items"
                    (click) = itemClicked(item)>
                    {{item}}
                    </li>
        </ol>   
        
    `,
    providers: [ItemService]
})

export class ItemsComponent{
    items = [];
    
    private itemService;
    constructor(itemServie:ItemService){
        this.itemService = itemServie;
        this.itemService.getItems().subscribe(
            data => this.push(data),
            error => console.log(error)
        );
    }
    itemClicked(item:string){
        this.itemService.deleteItem(item).subscribe(
            data => this.push(data),
            error => console.log(error)
        );
        
    }
    addItem(item:string){
        this.itemService.addItem(item).subscribe(
            data => this.push(data),
            error => console.log(error)
        );
       
    }
    push(res:any[]){
        this.items = [];
        for (var index = 0; index < res.length; index++) {
                
                this.items[index]=res[index].title;
                
            }
    }
    
    
}