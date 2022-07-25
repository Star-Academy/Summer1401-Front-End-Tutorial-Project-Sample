import {Component} from '@angular/core';

import {NgxPopperjsPlacements} from 'ngx-popperjs';

@Component({
    selector: 'app-profile-button',
    templateUrl: './profile-button.component.html',
    styleUrls: ['./profile-button.component.scss'],
})
export class ProfileButtonComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public async logoutButtonClickHandler(): Promise<void> {
        localStorage.removeItem('token');
        window.location.reload();
    }
}
