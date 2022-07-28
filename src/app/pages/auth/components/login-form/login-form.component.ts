import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';
import {UserLoginData} from '../../../../models/api/user-login-data.model';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['../../styles/form.scss'],
})
export class LoginFormComponent {
    public user: UserLoginData = {
        username: '',
        password: '',
    };

    public constructor(private router: Router, private authService: AuthService) {}

    public async formSubmitHandler(): Promise<void> {
        const succeeded = await this.authService.login(this.user);
        if (succeeded) await this.router.navigateByUrl('/');
    }
}
