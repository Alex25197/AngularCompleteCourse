import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentNav: string = 'recipe';
  title = 'shoppingList';

  switchComponent(event){
    this.currentNav = event;
  }
}
