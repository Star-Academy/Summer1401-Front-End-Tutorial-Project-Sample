import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserLoginData} from '../../models/api/user-login-data.model';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    public user: UserLoginData = {
        username: '',
        password: '',
    };

    public isInLoginView: boolean = true;

    public constructor(private router: Router, private authService: AuthService) {}

    public async formSubmitHandler(): Promise<void> {
        const succeeded = await this.authService.login(this.user);
        if (succeeded) await this.router.navigateByUrl('/');
    }
}
