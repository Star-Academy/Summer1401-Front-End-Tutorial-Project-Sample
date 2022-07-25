import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public isLoggedIn: boolean = false;

    public constructor(private authService: AuthService) {
        this.initializeFields().then();
    }

    private async initializeFields(): Promise<void> {
        this.isLoggedIn = await this.authService.isLoggedIn();
    }
}
