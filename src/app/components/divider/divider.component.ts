import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-divider',
    templateUrl: './divider.component.html',
    styleUrls: ['./divider.component.scss'],
})
export class DividerComponent {
    @Input() public variation: 'vertical' | 'horizontal' = 'vertical';
    @Input() public padding: string = '';
}
