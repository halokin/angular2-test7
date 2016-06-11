import {Component} from 'angular2/core';
import {ShoppingListComponent} from './shopping-list.component'

@Component({ 

selector: 'app', 
template: `
<header>
	<div class="brand">Shopping list</div>
</header>
<div class="main">
	<shopping-list></shopping-list>
</div>

`, 
directives: [ShoppingListComponent]


})


export class AppComponent {

}
