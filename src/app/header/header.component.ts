import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() switcher = new EventEmitter<string>();

    onSelect(value){
        this.switcher.emit(value);
    }

}