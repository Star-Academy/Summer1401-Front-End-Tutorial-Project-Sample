import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent {
    public SHOPS = SHOPS;

    @ViewChild('town') private town!: ElementRef<HTMLDivElement>;
}
