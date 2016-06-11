import {Component} from 'angular2/core';

@Component({
	selector: 'shopping-list',
	template: '
	<section>
		new item
	</section>
	<section>
		<h3>list</h3>
		<div class="list">
			output list
		</div>
	</section>
	<section>
		edit items
	</section>
	',
	directives: [ShoppingListComponent]

})

export class ShoppingListComponent {
	
}