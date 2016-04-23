import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {ItemsComponent} from './items.component.ts';
import {HTTP_PROVIDERS} from "angular2/http";
@Component({
    selector: 'app',
    template: `
        <ItemsList></ItemsList>
    `,
    directives: [ItemsComponent]
})

export class App { 
    
}


bootstrap(App,[HTTP_PROVIDERS]);