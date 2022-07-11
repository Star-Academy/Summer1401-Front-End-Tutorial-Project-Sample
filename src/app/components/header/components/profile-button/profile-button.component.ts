import {Component} from '@angular/core';

import {NgxPopperjsPlacements, NgxPopperjsTriggers} from 'ngx-popperjs';

@Component({
    selector: 'app-profile-button',
    templateUrl: './profile-button.component.html',
    styleUrls: ['./profile-button.component.scss'],
})
export class ProfileButtonComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;
    public NgxPopperjsTriggers = NgxPopperjsTriggers;
}
