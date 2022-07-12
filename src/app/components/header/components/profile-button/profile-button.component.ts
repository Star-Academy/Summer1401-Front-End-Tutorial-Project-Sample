import {Component} from '@angular/core';

import {NgxPopperjsPlacements} from 'ngx-popperjs';

@Component({
    selector: 'app-profile-button',
    templateUrl: './profile-button.component.html',
    styleUrls: ['./profile-button.component.scss'],
})
export class ProfileButtonComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public logoutButtonClickHandler(): void {
        console.log('logoutButtonClickHandler');
    }
}
