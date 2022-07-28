import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';
import {UserRegisterData} from '../../../../models/api/user-register-data.model';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['../../styles/form.scss'],
})
export class RegisterFormComponent {
    public user: UserRegisterData = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
    };

    public constructor(private router: Router, private authService: AuthService) {}

    public async formSubmitHandler(): Promise<void> {
        const succeeded = await this.authService.login(this.user);
        if (succeeded) await this.router.navigateByUrl('/');
    }
}
